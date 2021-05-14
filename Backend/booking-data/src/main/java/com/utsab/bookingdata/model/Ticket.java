package com.utsab.bookingdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "flight-tickets")
public class Ticket {

    @Id
    private String id;

    private String userName;
    private String userEmail;
    private String userDob;
    private String userGender;
    private String ticketNumber;
    private String flightName;
    private String flightNumber;
    private String seatNumber;
    private int price;
    private String date;
    private String from;
    private String to;
    private String departureTime;
    private String arrivalTime;


}
