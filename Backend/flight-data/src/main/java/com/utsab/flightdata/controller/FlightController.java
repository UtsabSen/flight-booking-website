package com.utsab.flightdata.controller;

import com.utsab.flightdata.model.Flight;
import com.utsab.flightdata.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class FlightController {
    @Autowired
    private FlightRepository flightRepository;

    @GetMapping("/flights")
    public List<Flight> getFlights(){
        return flightRepository.findAll();
    }

    @GetMapping("/flights/{id}")
    public Flight getFlight(@PathVariable String id){
        return flightRepository.findById(id).orElse(null);
    }

    @PostMapping("/add-flight")
    public Flight setFlight(@RequestBody Flight flight) {
        return flightRepository.save(flight);
    }

    @PutMapping("/update-flight")
    public Flight putMapping(@RequestBody Flight newFlight){
        Flight oldFlight = flightRepository.findById(newFlight.getId()).orElse(null);
        oldFlight.setFlightNumber(newFlight.getFlightNumber());
        oldFlight.setName(newFlight.getName());
        oldFlight.setFlightNumber(newFlight.getFlightNumber());
        oldFlight.setDate(newFlight.getDate());
        oldFlight.setFrom(newFlight.getFrom());
        oldFlight.setTo(newFlight.getTo());
        oldFlight.setDepartureTime(newFlight.getDepartureTime());
        oldFlight.setArrivalTime(newFlight.getArrivalTime());
        oldFlight.setTotalSeats(newFlight.getTotalSeats());
        oldFlight.setBookedSeats(newFlight.getBookedSeats());
        oldFlight.setStatus(newFlight.getStatus());
        oldFlight.setPrice(newFlight.getPrice());
        flightRepository.save(oldFlight);
        return oldFlight;
    }

    @DeleteMapping("/{id}")
    public String deleteFlight(@PathVariable String id){
        flightRepository.deleteById(id);
        return id;
    }
}
