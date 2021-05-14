import React,{Component} from "react";
import FlightView from "../FlightComponent/FlightView";
import FlightPage from "../FlightComponent/FlightPage";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import axios from "axios";
import styles from "./Card.module.css"
import Ticket from "./TicketSlip";
import {logData} from "../Services/Functions";

class UserTickets extends Component{


        state = {
            data : [],
            tickets : [],
            userName : "",
            userEmail : "",
            userDob : "",
            userGender: "",
            ticketNumber : "",
            seatNumber: "",
            flightName : "",
            flightNumber : "",
            from : "",
            to : "",
            date : "",
            departureTime : "",
            arrivalTime : "",
            loading : true
        }


    componentDidMount() {
        axios.get("http://localhost:8093/api/tickets").then(res=>{
            console.log("get tickect", res.data)
            this.setState({
                tickets : res.data.reverse(),
                loading : false
            })
            console.log("get get tic", this.state.tickets)
        })
        // this.setState({
        //
        // })
    }

    render() {
        let tickets = this.state.loading ? <div>Loading...</div> : this.state.tickets.map(ticket => {
            console.log("check", logData().email, ticket.userEmail, logData().email === ticket.userEmail)
            return logData().email === ticket.userEmail ? <Ticket key={ticket.id} ticket={ticket}/> : <></>
        })
        console.log(this.state.loading);
        return (
            <div>
                <div className={`card card-body col-lg-10 offset-md-1 pt-md-4`} style={{backgroundColor:" #9C4722"}}>
                    <h1 className={"text-white text-center"}>Your Ticket</h1>
                </div>
                <div className={styles.ticketWrapper}>
                    {tickets}
                </div>
            </div>
        );
    }
}

export default UserTickets;
