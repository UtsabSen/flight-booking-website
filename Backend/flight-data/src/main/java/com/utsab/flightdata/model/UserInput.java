package com.utsab.flightdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInput {

    @Id
    private String id;

    private String userInputFrom;
    private String userInputTo;
    private String userInputDate;
    private String userInputTotalPassenger;
}
