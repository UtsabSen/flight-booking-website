import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import axios from "axios";
import {Button, Col, Table} from "react-bootstrap";
import {Link} from "react-router-dom";


class FlightPage extends Component{

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
            status : "",

            price : 0
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8091/api/flights").then((res) => {
            this.setState({
                flights : res.data.reverse(),
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
                status : "",

                price : 0
            })
        })
    }


    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="card card-body col-lg-10 offset-md-1 pt-md-4">
                    <table className="table table-responsive-md text-center text-white justify-content-center">
                        <thead className="thead-dark">
                        <tr>
                            <th>Flight Number</th>
                            <th>Flight Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Status</th>
                            <th colSpan="1">Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.flights.map(flight =>
                                <tr key={flight.id} className={`${flight.status === "Unavailable" || flight.status === "Canceled" ? "bg-danger" : "bg-success"}`}>
                                    <td>{flight.flightNumber}</td>
                                    <td>{flight.name}</td>
                                    <td>{flight.date}</td>
                                    <td>{flight.price}</td>
                                    <td>{flight.totalSeats - flight.bookedSeats}</td>
                                    <td>
                                        <>
                                            <tr>{flight.from}</tr>
                                        </>
                                        <>
                                            <td>{flight.departureTime}</td>
                                        </>
                                    </td>
                                    <td>
                                        <>
                                            <tr>{flight.to}</tr>
                                        </>
                                        <>
                                            <td>{flight.arrivalTime}</td>
                                        </>
                                    </td>

                                    <td>{flight.status}</td>

                                    <td className="">
                                        <Link to={`/flight/${flight.id}`} className="btn btn-dark btn-lg">
                                            VIEW
                                        </Link>
                                    </td>
                                    {/*<td className="">*/}
                                    {/*    <Link to={`/ticket/${flight.id}`} className={`btn btn-dark btn-lg */}
                                    {/*    ${flight.status === "Unavailable" || flight.status === "Canceled" ? "disabled" : ""}`}>*/}
                                    {/*        BOOK*/}
                                    {/*    </Link>*/}
                                    {/*</td>*/}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default FlightPage;
