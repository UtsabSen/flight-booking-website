package com.utsab.flightdata.repository;

import com.utsab.flightdata.model.Flight;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FlightRepository extends MongoRepository<Flight, String> {
}
