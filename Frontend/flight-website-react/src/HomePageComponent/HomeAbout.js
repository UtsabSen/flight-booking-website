import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import Flight from "../images/flight.jpg"

class HomeAbout extends Component{
    render() {
        return (
            <div className="bg-secondary p-2" id="about">
                <div className="container-fluid d-flex justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={Flight}/>
                    </Card>
                </div>
                <h4>Contact Us</h4>
                <p>+91-8768855268</p>
                <p>utsabsen1999@gmail.com</p>
                <p>© IndianAirlines.com, Inc. All rights reserved.</p>
            </div>
        )
    }
}

export default HomeAbout
