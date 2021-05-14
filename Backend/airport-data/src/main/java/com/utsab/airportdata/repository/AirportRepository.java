package com.utsab.airportdata.repository;

import com.utsab.airportdata.model.Airport;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AirportRepository extends MongoRepository<Airport, String> {
}
