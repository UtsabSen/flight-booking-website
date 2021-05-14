import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Col, Form, Row} from "react-bootstrap";
import {compare} from "../Services/Functions";


class AdminFlightAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            flights : [],
            airports : [],
            id : 0,
            name : "",
            flightNumber : "",
            date : "",
            from : "",
            to : "",
            departureTime : "",
            arrivalTime : "",
            totalSeats : 0,
            bookedSeats : 0,
            status : "",
            price : 0,
            isAdded : ""
        }
    }

    componentDidMount() {
        this.id = this.props.match.params.id;
        axios.get(`http://localhost:8091/api/flights/`)
            .then((res) => {
                this.setState({
                    flights : res.data,
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
                    status : "Available On Time",
                    price : 0
                })
        }).catch(err => {
            console.log(err)
        })

        axios.get("http://localhost:8092/api/airports").then((res) => {
            this.setState({
                airports : res.data
            })
        })
    }

    submit(event, id){
        event.preventDefault();
        console.log(id);
        if(id === 0){
            axios.post("http://localhost:8091/api/add-flight", {
                name: this.state.name,
                flightNumber: this.state.flightNumber,
                date : this.state.date,
                from: this.state.from,
                to: this.state.to,
                departureTime: this.state.departureTime,
                arrivalTime: this.state.arrivalTime,
                totalSeats: this.state.totalSeats,
                bookedSeats: this.state.bookedSeats,
                status: this.state.status,
                price : this.state.price
            }).then(() => {
                this.componentDidMount();
                this.state.isAdded = true
            })
            alert("Flight Added")
            // console.log("Added submit: ",this.state.isAdded)
        } else {
            axios.put("http://localhost:8091/api/update-flight", {
                id: id,
                name: this.state.name,
                flightNumber: this.state.flightNumber,
                date : this.state.date,
                from: this.state.from,
                to: this.state.to,
                departureTime: this.state.departureTime,
                arrivalTime: this.state.arrivalTime,
                totalSeats: this.state.totalSeats,
                bookedSeats: this.state.bookedSeats,
                status: this.state.status,
                price : this.state.price
            }).then(
                res => {
                    console.log(res);
                }
            ).catch(err => {
                console.log(err)
            })
        }
    }
    render() {
        // console.log("Added render: ",this.state.isAdded)
        if(this.state.isAdded){
            return <Redirect to={"/admin/flights"}/>
        }
        return (
            <div>
                <HomeNavbar/>
                <div className="pt-lg-3">
                    <div className="card card-body col-lg-6 offset-md-3 pt-md-4 alert-primary">
                        <form onSubmit={(e) => this.submit(e, this.state.id)}>
                            <h3 className="text-center">Add Flight</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" required placeholder="Name" value={this.state.name}
                                       onChange={(e) => this.setState({name : e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Flight Number</label>
                                <input type="text" className="form-control" required placeholder="Flight Number" value={this.state.flightNumber}
                                       onChange={(e) => this.setState({flightNumber : e.target.value})}/>
                            </div>

                            <div className="form-group">
                                <Row className="form-group">
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type="date" className="form-control" required placeholder="Date" value={this.state.date}
                                                   onChange={(e) => this.setState({date : e.target.value})}/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="number" className="form-control" required placeholder="Price" value={this.state.price}
                                                   onChange={(e) => this.setState({price : e.target.value})}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="form-group">
                                <Row className="form-group">
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>From</label>
                                            <Form.Control as="select" value={this.state.from} required onChange={(e) => this.setState({from : e.target.value})}>
                                                {
                                                    this.state.airports.sort().map( airport =>
                                                        <option>{airport.name} - {airport.location} - {airport.code}</option>
                                                    )
                                                }
                                            </Form.Control>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>To</label>
                                            <Form.Control as="select" value={this.state.to} required onChange={(e) => this.setState({to : e.target.value})}>
                                                {
                                                    this.state.airports.sort().map( airport =>
                                                        <option>{airport.name} - {airport.location} - {airport.code}</option>
                                                    )
                                                }
                                            </Form.Control>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group">
                                <Row className="form-group">
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Departure Time</label>
                                            <input type="time" className="form-control" required placeholder="Departure Time" value={this.state.departureTime}
                                                   onChange={(e) => this.setState({departureTime : e.target.value})}/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Arrival Time</label>
                                            <input type="time" className="form-control" required placeholder="Arrival Time" value={this.state.arrivalTime}
                                                   onChange={(e) => this.setState({arrivalTime : e.target.value})}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group">
                                <Row className="form-group">
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Total Seats</label>
                                            <input type="number" className="form-control" placeholder="Total Seats" value={this.state.totalSeats}
                                                   onChange={(e) => this.setState({totalSeats : e.target.value})}/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group">
                                            <label>Booked Seats</label>
                                            <input type="number" className="form-control" placeholder="Booked Seats" value={this.state.bookedSeats}
                                                   onChange={(e) => this.setState({bookedSeats : e.target.value})}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <Form.Control as="select" value={this.state.status} onChange={(e) => this.setState({status : e.target.value})}>
                                    <option value="Available On Time">Available On Time</option>
                                    <option value="Available Delayed">Available Delayed</option>
                                    <option value="Unavailable">Unavailable</option>
                                    <option value="Canceled">Canceled</option>
                                </Form.Control>
                            </div>
                            <button className="btn btn-dark btn-lg btn-block" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AdminFlightAdd;
