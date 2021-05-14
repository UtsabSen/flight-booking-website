import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import axios from "axios";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";


class AdminFlightsData extends Component{

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

    delete(id){
        axios.delete("http://localhost:8091/api/" + id)
            .then(() => {
                this.componentDidMount();
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
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th colSpan="2">Actions</th>
                            <th>
                                <Link to={`/admin/add-flights`} className="btn btn-primary btn-md">
                                    Add
                                </Link>
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.flights.map(flight =>
                                <tr key={flight.id} className={`${flight.status === "Unavailable" || flight.status === "Canceled" ? "btn-outline-danger" : "btn-outline-success"}`}>
                                    <td>{flight.flightNumber}</td>
                                    <td>{flight.name}</td>
                                    <td>{flight.date}</td>
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
                                    <td>{flight.price}</td>
                                    <td className="">
                                        <Link to={`/flight/${flight.id}`} className="btn btn-primary btn-lg">
                                            View
                                        </Link>
                                    </td>
                                    <td className="">
                                        <Link to={`/admin/edit-flight/${flight.id}`} className={`btn btn-warning btn-lg`}>
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="">
                                        <Link> <Button variant="danger" className="btn-lg" onClick={(e)=>this.delete(flight.id)}>Delete</Button> </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default AdminFlightsData;
