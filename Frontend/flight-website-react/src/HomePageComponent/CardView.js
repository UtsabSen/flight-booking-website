import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import style from "./HomePopularFlights.module.css";
import Modal from "../Services/Modal";

import Air_Asia from '../images/Air_Asia.png';
import Air_India from '../images/Air_India.jpg';
import Indigo from '../images/indigo.png';
import Spice_Jet from '../images/Spice_Jet.png';
import axios from "axios";
import {Link, Route} from "react-router-dom";

class CardView extends Component{

    state={
        show:false,
        flightArr : [],
        loading : true
    }

    componentDidMount() {
    }

    handlerView = () => {
        // console.log('clicked!')
        axios.get("http://localhost:8091/api/flights").then((res)=>{
            const data=res.data.filter(f=>f.name===this.props.title)
            console.log(res.data)
            console.log(data)
            this.setState({
                flightArr : data,
                loading : false
            })
        })
        let c=this.state.show
        this.setState({
            show : !c
        })
        if(!this.state.show){
            this.setState({
                flightArr : []
            })
        }
    }


    render() {
        if(this.state.show){
            return (
                <div className={"card card-body"}>
                    <Modal show={this.state.show} modalClosed={this.handlerView}><p>{ this.state.loading ? "Loading..." :
                        <div className="card card-body col-lg-10 offset-md-1 pt-md-4">
                            <table className="table table-responsive-md text-center text-white justify-content-center">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Flight Number</th>
                                    <th>Flight Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Status</th>
                                    <th colSpan="1">Actions</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.flightArr.map(flight =>
                                        <tr key={flight.id} className={`${flight.status === "Unavailable" || flight.status === "Canceled" ? "bg-danger" : "bg-success"}`}>
                                            <td>{flight.flightNumber}</td>
                                            <td>{flight.name}</td>
                                            <td>{flight.date}</td>
                                            <td>{flight.price}</td>
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
                    }</p>

                    </Modal>
                </div>
            )
        }
        return (
            <div>

                <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className={style.card}>
                        <Card.Img variant="top" src={this.props.src} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Button style={{paddingRight:"10px"}} onClick={this.handlerView} variant="primary">View</Button>{' '}
                            {/*<Link to={}><Button style={{paddingLeft:"10px"}} variant="primary">Visit</Button></Link>*/}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardView;
