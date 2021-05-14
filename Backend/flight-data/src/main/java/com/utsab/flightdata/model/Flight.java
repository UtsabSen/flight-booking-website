package com.utsab.flightdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "flights-data")
public class Flight {

    @Id
    private String id;

    private String name;
    private String flightNumber;
    private String date;
    private String from;
    private String to;
    private String departureTime;
    private String arrivalTime;
    private int totalSeats;
    private int bookedSeats;
    private String status;
    private int price;
}
