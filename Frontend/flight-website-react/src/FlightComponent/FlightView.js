import React, {Component, useState, useEffect} from "react";
import axios from "axios";
import {Alert, Container, Jumbotron, Table} from "react-bootstrap";

class FlightView extends Component{

    constructor(props) {
        super(props);
        this.state = {
            flights : [],
            id : 0,
            name : "",
            flightNumber : "",
            date : "",
            from : "",
            to : "",
            departureTime : "",
            arrivalTime : "",
            totalSeats : 200,
            bookedSeats : 0,
            price : 0,
            status : ""
        }
    }

    componentDidMount() {
        this.id = this.props.match.params.id;
        // console.log("componentdidmount id: ", this.id);
        axios.get(`http://localhost:8091/api/flights/${this.id}`).then((res) => {
            this.setState({
                name : res.data.name,
                flightNumber : res.data.flightNumber,
                date : res.data.date,
                from : res.data.from,
                to : res.data.to,
                departureTime : res.data.departureTime,
                arrivalTime : res.data.arrivalTime,
                totalSeats : res.data.totalSeats,
                bookedSeats : res.data.bookedSeats,
                status : res.data.status,
                price : res.data.price
            })
        })
    }


    render() {
        return (
            <div className="container">
                <Jumbotron className={`text-white ${this.state.status === "Unavailable" || this.state.status === "Canceled" ? "bg-danger" : "bg-success"}`}>
                    <h2>Flight : {this.state.name}</h2>
                    <h3>Flight No : {this.state.flightNumber}</h3>
                </Jumbotron>

                <Alert className={`${this.state.status === "Unavailable" || this.state.status === "Canceled" ? "text-danger" : "text-success"}`}><h4>Status: {this.state.status}</h4></Alert>

                <Table className="table-bordered table-primary text-center">
                    <thead>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Departure From</th>
                        <th>Departure Time</th>
                        <th>Arrival To</th>
                        <th>Arrival Time</th>
                    </thead>
                    <tbody>
                        <td>{this.state.date}</td>
                        <td>{this.state.price}</td>
                        <td>{this.state.from}</td>
                        <td>{this.state.departureTime}</td>
                        <td>{this.state.to}</td>
                        <td>{this.state.arrivalTime}</td>
                    </tbody>
                </Table>
                    <h5>Total Seats: {this.state.totalSeats}</h5>
                    <h5>Booked Seats: {this.state.bookedSeats}</h5>
            </div>
        );
    }

}
export default FlightView
