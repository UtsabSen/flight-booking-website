package com.utsab.airportdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flight-airport")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Airport {

    @Id
    private String id;

    private String name;
    private String location;
    private String code;
}
