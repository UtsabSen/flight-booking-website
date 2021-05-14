import React, { Component } from 'react';
import styles from './Card.module.css';

class Ticket extends Component{


    render(){


        const {
            userName,
            userGender,
            ticketNumber,
            seatNumber,
            flightName,
            flightNumber,
            from,
            to,
            date,
            departureTime,
            arrivalTime
        }=this.props.ticket


        return (
            <div className={`font-weight-bolder text-white ${styles.card}`}>
                <div className={`${styles.left}`}>
                    <h1 className={"text-center"}>{flightName}</h1>
                    <div className={styles.centerAlignment}>
                        <p>Flight No : {flightNumber}</p>
                        <p>Departure From : {from}</p>
                        <p>Arrival To : {to}</p>
                    </div>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.upper} ${styles.circle}`}></div>
                    <div className={`${styles.lower} ${styles.circle}`}></div>
                    <div>
                        <h3>{userName}</h3>
                        <div className={"mt-lg-5"}>
                            <p>Gender : {userGender}</p>
                            <p>Date : {date}</p>
                        </div>
                        <div className={styles.alignment}>
                            <p>Departure Time : {departureTime}</p>
                            <p>Arrival Time : {arrivalTime}</p>
                        </div>
                        <div className={styles.alignment}>
                            <p>Ticket No : {ticketNumber}</p>
                            <p>Seat No : {seatNumber}</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}

export default Ticket
