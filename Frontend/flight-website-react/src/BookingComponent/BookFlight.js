import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {logData, ticketData, userInput} from "../Services/Functions";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

class BookFlight extends Component{

    constructor(props) {
        super(props);
        this.state = {
            flights : [],
            t : [],
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
            price : 0,
            redirect : ""
        }
    }

    componentDidMount() {

        const userData = {
            userInputFrom : userInput().userInpFrom,
            userInputTo : userInput().userInpTo,
            userInputDate : userInput().userInpDate.toString(),
            userInputTotalPassenger : userInput().userInpTotalPassenger
        }
        // console.log("userdata : ", userData)
        // console.log("userpass : ", userInput().userInpTotalPassenger)
        axios.get("http://localhost:8093/api/tickets").then(res=>{
            console.log("get tickect", res)
            this.setState({
                t : res.data
            })
            console.log("get get tic", this.state.t)
        })

        axios.post("http://localhost:8091/api/fetch-flights", userData)
            .then(res => {
                console.log(res)
                this.setState({
                    flights : res.data
                })
            })
    }

    handleSubmit = (index) => {
        // console.log("Hand ",index)
        // console.log(this.state.flights[index].name)
        // const ticket = {
        //     userName : logData().firstName + " " + logData().lastName,
        //     userEmail : logData().email,
        //     userDob : logData().dob,
        //     userGender : logData().gender,
        //     ticketNumber : Math.floor((Math.random() * 9999) + 1),
        //     seatNumber : Math.floor((Math.random() * this.state.flights[index].totalSeats) + 1),
        //     flightName : this.state.flights[index].name,
        //     flightNumber : this.state.flights[index].flightNumber,
        //     from : this.state.flights[index].from,
        //     to : this.state.flights[index].to,
        //     date : this.state.flights[index].date,
        //     departureTime : this.state.flights[index].departureTime,
        //     arrivalTime : this.state.flights[index].arrivalTime,
        //     price : this.state.flights[index].price
        // }
        // console.log("ticket", ticket)

        const tData = {
            userName : logData().firstName + " " + logData().lastName,
            userEmail : logData().email,
            userDob : logData().dob,
            userGender : logData().gender,
            ticketNumber : Math.floor((Math.random() * 9999) + 1),
            seatNumber : Math.floor((Math.random() * this.state.flights[index].totalSeats) + 1),
            flightName : this.state.flights[index].name,
            flightNumber : this.state.flights[index].flightNumber,
            from : this.state.flights[index].from,
            to : this.state.flights[index].to,
            date : this.state.flights[index].date,
            departureTime : this.state.flights[index].departureTime,
            arrivalTime : this.state.flights[index].arrivalTime,
            price : this.state.flights[index].price
        }

        axios.post("http://localhost:8093/api/add-ticket", tData)
            .then(res => {
                localStorage.setItem("currentTicket", JSON.stringify(tData))
                console.log(res)
            }).catch(err =>{
                console.log(err)
        })

        console.log("Flight id", this.state.flights[index].id)


        axios.put("http://localhost:8091/api/update-flight",{
            id: this.state.flights[index].id,
            name : this.state.flights[index].name,
            flightNumber : this.state.flights[index].flightNumber,
            date : this.state.flights[index].date,
            from : this.state.flights[index].from,
            to : this.state.flights[index].to,
            departureTime : this.state.flights[index].departureTime,
            arrivalTime : this.state.flights[index].arrivalTime,
            totalSeats : this.state.flights[index].totalSeats,
            bookedSeats : parseInt(this.state.flights[index].bookedSeats) + parseInt(userInput().userInpTotalPassenger),
            status : this.state.flights[index].status,
            price : this.state.flights[index].price
        }).then((res) =>{
            console.log(res)
        })

        // localStorage.setItem("ticketData", JSON.stringify(ticket))
        this.setState({
            redirect : "Ticket"
        })
    }



    render() {
        // const renderTooltip = (props) => (
        // <Tooltip id="button-tooltip" {...props}>
        //     {
        //         props.totalSeats-props.bookedSeats < userInput().userInpTotalPassenger ? `Seat Full: Only ${props.totalSeats-props.bookedSeats} seats available` : "Select"
        //     }
        // </Tooltip>
        // );

        if(this.state.redirect === "Ticket"){
            return <Redirect to={`/ticket/${logData().id}`}/>
        }
        return (
            <div>
                <HomeNavbar/>
                <h1 className="text-center">Recommended Flights</h1>
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
                            <th colSpan="2">Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.flights.map((flight, index )=>

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
                                    <td className="">
                                        {/*<Link to={`/ticket/${flight.id}`} className={`btn btn-dark btn-lg */}
                                        {/*${flight.status === "Unavailable" || flight.status === "Canceled" ? "disabled" : ""}`}>*/}
                                        {/*    BOOK*/}
                                        {/*</Link>*/}
                                        <>
                                            <Button className={"btn-lg"} disabled={flight.status === "Unavailable" ||
                                            flight.status === "Canceled" || flight.totalSeats-flight.bookedSeats < userInput().userInpTotalPassenger}
                                                    onClick={() => this.handleSubmit(index)}>Book</Button>
                                        </>
                                        {
                                            flight.totalSeats-flight.bookedSeats < userInput().userInpTotalPassenger ? <p className={"alert-warning"}>Seats not available for {userInput().userInpTotalPassenger} people</p> : null
                                        }
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
export default BookFlight
