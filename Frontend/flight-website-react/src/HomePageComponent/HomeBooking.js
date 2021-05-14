import React, {Component} from "react";
import {Card, Button, Form, Row, Col, FormGroup} from "react-bootstrap";
import axios from "axios";
import {isAuthenticated, logData} from "../Services/Functions";
import {Redirect} from "react-router-dom";

class HomeBooking extends Component {

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
        event.preventDefault();
        if(isAuthenticated()){
            localStorage.setItem("userInput", JSON.stringify(userInp))
            this.setState({
                redirect : "Booking"
            })
        } else {
            this.setState({
                redirect : "Login"
            })
        }
        // console.log(localStorage.getItem("userInput"))
    }

    render() {

        if(isAuthenticated() && this.state.redirect === "Booking"){
            return <Redirect to={"/booking"}/>
        }else if(!isAuthenticated() && this.state.redirect === "Login"){
            return <Redirect to={"/login"}/>
        }

        return (

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
                                            this.state.airports.map( airport =>
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
                                            this.state.airports.map( airport =>
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
                                    <input type="date" className="form-control" placeholder="Travel date" value={this.state.date}
                                           onChange={(e) => this.setState({date : e.target.value})}/>
                                </Col>
                                <Col sm={6}>
                                    <label>Total Passenger</label>
                                    <input type="number" className="form-control" placeholder="total passenger" value={this.state.passenger}
                                           onChange={(e) => this.setState({passenger : e.target.value})}/>
                                </Col>
                            </Row>
                        </div>
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Book</button>
                    </form>
                </div>
            </div>

            // <div className="justify-content-center col-lg-6 offset-md-3 pt-md-4">
            //     <Card className="text-center">
            //         <Card.Header>Book Your Ticket</Card.Header>
            //         <Card.Body>
            //             <Form>
            //                 <fieldset>
            //                     <Form.Group as={Row}>
            //                         <Col sm={6}>
            //                             <div>
            //                                 <Form.Check
            //                                     type="radio"
            //                                     label="Domestic Flights"
            //                                     name="formHorizontalRadios"
            //                                     id="formHorizontalRadios1"
            //                                 />
            //                             </div>
            //                         </Col>
            //                         <Col sm={6}>
            //                             <div>
            //                                 <Form.Check
            //                                     type="radio"
            //                                     label="International Flights"
            //                                     name="formHorizontalRadios"
            //                                     id="formHorizontalRadios2"
            //                                 />
            //                             </div>
            //                         </Col>
            //                     </Form.Group>
            //                     <FormGroup as={Row}>
            //                         <Form.Group as={Col} controlId="formGridState" sm={6}>
            //                             <Form.Label>From</Form.Label>
            //                             <Form.Control as="select" defaultValue="Choose...">
            //                                 {
            //                                     this.state.airports.map( airport =>
            //                                         <option>{airport.name} - {airport.location} - {airport.code}</option>
            //                                     )
            //                                 }
            //                             </Form.Control>
            //                         </Form.Group>
            //
            //                         <Form.Group as={Col} controlId="formGridState" sm={6}>
            //                             <Form.Label>To</Form.Label>
            //                             <Form.Control as="select" defaultValue="Choose...">
            //                                 {
            //                                     this.state.airports.map( airport =>
            //                                         <option>{airport.name} - {airport.location} - {airport.code}</option>
            //                                     )
            //                                 }
            //                             </Form.Control>
            //                         </Form.Group>
            //                     </FormGroup>
            //                     <FormGroup as={Row}>
            //                         <Form.Group as={Col} controlId="formGridState" sm={6}>
            //                             <Form.Label>Date</Form.Label>
            //                             <Form.Control type="date"/>
            //                         </Form.Group>
            //
            //                         <Form.Group as={Col} controlId="formGridState" sm={6}>
            //                             <Form.Label>Total Passenger</Form.Label>
            //                             <Form.Control type="number" max="10" min="1"/>
            //                         </Form.Group>
            //                     </FormGroup>
            //                     <Form.Group>
            //                         <Form.Check
            //                             required
            //                             name="terms"
            //                             label="Agree to terms and conditions"
            //                             // onChange={handleChange}
            //                             id="validationFormik106"
            //                             feedbackTooltip
            //                         />
            //                     </Form.Group>
            //                     <Button type="submit">Submit form</Button>
            //                 </fieldset>
            //             </Form>
            //         </Card.Body>
            //     </Card>
            // </div>
        )
    }
}

export default HomeBooking
