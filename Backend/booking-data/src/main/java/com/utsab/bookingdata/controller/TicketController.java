package com.utsab.bookingdata.controller;


import com.utsab.bookingdata.model.Ticket;
import com.utsab.bookingdata.model.UserData;
import com.utsab.bookingdata.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping("/tickets")
    public List<Ticket> getTickets(){
        return ticketRepository.findAll();
    }

    @GetMapping("/tickets/{id}")
    public Ticket getTicket(@PathVariable String id){
        return ticketRepository.findById(id).orElse(null);
    }

    @PostMapping("/add-ticket")
    public Ticket setTicket(@RequestBody Ticket ticket){
        return ticketRepository.save(ticket);
    }

    @PostMapping("/getTicketByEmail")
    public List<Ticket> getUserTickets(@RequestBody UserData userData){
        List<Ticket> userTickets = new ArrayList<>();
        for(Ticket ticket : ticketRepository.findAll()){
            System.out.println(ticket.getUserEmail());
            System.out.println(userData.getEmail());
            System.out.println(ticket.getUserEmail().equals(userData.getEmail()));
            if(ticket.getUserEmail().equals(userData.getEmail())){
                userTickets.add(ticket);
            }
        }
        return userTickets;
    }

    @PutMapping("/update-ticket")
    public Ticket putMapping(@RequestBody Ticket newTicket){
        Ticket oldTicket = ticketRepository.findById(newTicket.getId()).orElse(null);
        oldTicket.setUserName(newTicket.getUserName());
        oldTicket.setUserEmail(newTicket.getUserEmail());
        oldTicket.setUserDob(newTicket.getUserDob());
        oldTicket.setUserGender(newTicket.getUserGender());
        oldTicket.setTicketNumber(newTicket.getTicketNumber());
        oldTicket.setFlightName(newTicket.getFlightName());
        oldTicket.setFlightNumber(newTicket.getFlightNumber());
        oldTicket.setSeatNumber(newTicket.getSeatNumber());
        oldTicket.setPrice(newTicket.getPrice());
        oldTicket.setFrom(newTicket.getFrom());
        oldTicket.setTo(newTicket.getTo());
        oldTicket.setDate(newTicket.getDate());
        oldTicket.setDepartureTime(newTicket.getDepartureTime());
        oldTicket.setArrivalTime(newTicket.getArrivalTime());

        ticketRepository.save(oldTicket);

        return oldTicket;
    }
}
