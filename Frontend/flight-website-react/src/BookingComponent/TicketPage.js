import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Button, Card} from "react-bootstrap";
import {currentTicket, isAuthenticated, logData, userInput, userTicket} from "../Services/Functions";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import styles from "../LoginPageComponent/Card.module.css";
import Ticket from "../LoginPageComponent/TicketSlip";

class TicketPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            flights : [],
            tickets : [],
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
            loading : true,
            render : false
        }
    }

    componentDidMount() {
        // axios.get("http://localhost:8093/api/tickets").then(res=>{
        //     console.log("get tickect", res)
        //     this.setState({
        //         tickets : res.data.filter(f => f.email === logData().),
        //         loading : false
        //     })
        //     console.log("get get tic", this.state.tickets)
        // })
        // this.setState({
        //     tickets : currentTicket(),
        //     loading : false
        // })

        setTimeout(function () {
            this.setState({render : true})
        }.bind(this),1000)

        if(currentTicket() === null){
            this.setState({
                loading : true
            })
        } else {
            this.setState({
                loading : false
            })
        }
    }


    render() {
        // let tickets = this.state.loading ? <div>Loading...</div> : <Ticket key={currentTicket().id} ticket={currentTicket()}/>
        if(this.state.render){
            return (
                <div>
                    <HomeNavbar/>
                    <h1 className="text-center">Ticket Booked</h1>
                    <div className="card card-body col-lg-10 offset-md-1 pt-md-4">
                        <div className={"card"}>
                            <div className={styles.ticketWrapper}>
                                <Ticket key={currentTicket().id} ticket={currentTicket()}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <HomeNavbar/>
                <div className="card card-body text-center">
                    <h1>Loading...</h1>
                </div>
            </div>
        );
    }

    // constructor(props) {
    //     super(props);
    //     this.setState({
    //         tickets : [],
    //         email : ""
    //     })
    // }
    //
    // componentDidMount() {
    //     axios.get("http://localhost:8093/api/tickets").then((res) => {
    //         console.log("get",res.data)
    //         this.state.tickets = res.data
    //         localStorage.setItem("userTicket", JSON.stringify(res.data))
    //     })
    //         .then( () =>{
    //             console.log("Tickets:",this.state.tickets)
    //             }
    //         )
    // }
    //
    // render() {
    //     console.log(this.state.tickets)
    //     return (
    //         <div>
    //             <HomeNavbar/>
    //             <h1 className="pt-lg-5">Your Ticket</h1>
    //             {/*<p>{this.state.tickets}</p>*/}
    //             <div className="card card-body alert-success col-lg-6 offset-md-3 pt-md-4">
    //                 {/*{*/}
    //                 {/*    this.state.tickets.map((ticket, index) =>*/}
    //                 {/*        <h1>{ticket[index]}</h1>*/}
    //                 {/*    )*/}
    //                 {/*}*/}
    //                 {/*<h1>{userTicket()[0].userName}</h1>*/}
    //             </div>
    //             {/*<Button className="btn" onClick={() => {this.display()}}>Press</Button>*/}
    //         </div>
    //     );
    // }

}
export default TicketPage
