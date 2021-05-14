package com.utsab.flightdata.controller;

import com.utsab.flightdata.model.Flight;
import com.utsab.flightdata.model.UserInput;
import com.utsab.flightdata.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserInputController {
    @Autowired
    private FlightRepository flightRepository;


    @PostMapping("/fetch-flights")
    public List<Flight> fetchFlights(@RequestBody UserInput userInput){
        List<Flight> responseFlight = new ArrayList<>();
        for (Flight flight : flightRepository.findAll()) {
//            System.out.println(flight.getDate());
//            System.out.println(userInput);
//            System.out.println(flight.getDate().equals(userInput.getUserInputDate()));
            if(flight.getDate().equals(userInput.getUserInputDate()) || (flight.getFrom().equals(userInput.getUserInputFrom())) && flight.getTo().equals(userInput.getUserInputTo())){
                responseFlight.add(flight);
            }
        }
//        responseFlight.addAll(flightRepository.findAll());

        return responseFlight;
    }
}
