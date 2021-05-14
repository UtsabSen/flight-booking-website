package com.utsab.bookingdata.repository;

import com.utsab.bookingdata.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketRepository extends MongoRepository<Ticket, String> {
}
