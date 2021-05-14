package com.utsab.airportdata.controller;

import com.utsab.airportdata.model.Airport;
import com.utsab.airportdata.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AirportController {
    @Autowired
    private AirportRepository airportRepository;

    @GetMapping("/airports")
    public List<Airport> getAirports() {
        return airportRepository.findAll();
    }

    @GetMapping("/airports/{id}")
    public Airport getAirport(@PathVariable String id) {
        return airportRepository.findById(id).orElse(null);
    }

    @PostMapping("/add-airport")
    public Airport setAirport(@RequestBody Airport airport){
        return airportRepository.save(airport);
    }

    @PutMapping("/update-airport")
    public Airport putMapping(@RequestBody Airport newAirport){
        Airport oldAirport = airportRepository.findById(newAirport.getId()).orElse(null);
        oldAirport.setName(newAirport.getName());
        oldAirport.setLocation(newAirport.getLocation());
        oldAirport.setCode(newAirport.getCode());
        airportRepository.save(oldAirport);
        return oldAirport;
    }
    @DeleteMapping("/{id}")
    public String deleteAirport(@PathVariable String id){
        airportRepository.deleteById(id);
        return id;
    }
}
