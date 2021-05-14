import React, {Component} from "react";
import {Card, Button, Form, Row, Col, FormGroup} from "react-bootstrap";
import axios from "axios";
import {compare, isAuthenticated, logData} from "../Services/Functions";
import {Redirect} from "react-router-dom";
import HomeNavbar from "../HomePageComponent/HomeNavbar";

class BookingPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            airports: [],
            userInp : [],
            id: 0,
            name: "",
            location : "",
            code: "",
            date : "",

            userInpFrom : "",
            userInpTo : "",
            userInpDate : "",
            userInpTotalPassenger : 0,

            passenger : 0,

            redirect : ""

        }
    }

    componentDidMount() {
        axios.get("http://localhost:8092/api/airports").then((res) => {
            this.setState({
                airports: res.data,
                id : 0,
                name: "",
                location : "",
                code: ""
            })
        })


    }

    submit (event, id){
        const userInp = {
            userInpFrom : this.state.from,
            userInpTo : this.state.to,
            userInpDate : this.state.date,
            userInpTotalPassenger : this.state.passenger,
        }
        // console.log(this.state.passenger)
        event.preventDefault();
        this.setState({
            redirect : "Flights"
        })
        localStorage.setItem("userInput", JSON.stringify(userInp))
    }

    render() {
        if(!isAuthenticated()){
            return <Redirect to={"/login"}/>
        } else if (this.state.redirect === "Flights"){
            return <Redirect to={`/book-flight`}/>
        }
        return (
            <div>
                <HomeNavbar/>
                <div className="alert-primary">
                <div className="card card-body col-lg-6 offset-md-3 pt-md-4 mt-3 mb-3">
                    <form onSubmit={(e) => this.submit(e, this.state.id)}>
                        <h3>Book Ticket</h3>

                        <div className="form-group">
                            <Row className="form-group">
                                <Col sm={6}>
                                    <label>Travel From</label>
                                    {/*<input type="text" className="form-control" placeholder="Travel from" value={this.state.from}*/}
                                    {/*       onChange={(e) => this.setState({from : e.target.value})}/>*/}
                                    <Form.Control as="select" defaultValue="Choose..." value={this.state.from}
                                                  onChange={(e) => this.setState({from : e.target.value})}>
                                        {
                                            this.state.airports.sort().map( airport =>
                                                <option>{airport.name} - {airport.location} - {airport.code}</option>
                                            )
                                        }
                                    </Form.Control>

                                </Col>
                                <Col sm={6}>
                                    <label>Travel To</label>
                                    <Form.Control as="select" defaultValue="Choose..." value={this.state.to}
                                                  onChange={(e) => this.setState({to : e.target.value})}>
                                        {
                                            this.state.airports.sort().map( airport =>
                                                <option>{airport.name} - {airport.location} - {airport.code}</option>
                                            )
                                        }
                                    </Form.Control>
                                </Col>
                            </Row>
                        </div>
                        <div className="form-group">
                            <Row className="form-group">
                                <Col sm={6}>
                                    <label>Travel Date</label>
                                    <input type="date" className="form-control" required placeholder="Travel date" value={this.state.date}
                                           onChange={(e) => this.setState({date : e.target.value})}/>
                                </Col>
                                <Col sm={6}>
                                    <label>Total Passenger</label>
                                    <input type="number" required min="1" max="10" className="form-control" placeholder="total passenger" value={this.state.passenger}
                                           onChange={(e) => this.setState({passenger : e.target.value})}/>
                                </Col>
                            </Row>
                        </div>
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Book</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}
export default BookingPage;
