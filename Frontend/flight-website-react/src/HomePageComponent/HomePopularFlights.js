import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import Air_Asia from '../images/Air_Asia.png';
import Air_India from '../images/Air_India.jpg';
import Indigo from '../images/indigo.png';
import Spice_Jet from '../images/Spice_Jet.png';
import style from './HomePopularFlights.module.css'
import CardView from "./CardView";

class HomePopularFlights extends Component{

    // render() {
    //
    //     const cardInfo = [
    //         {image : "", title : "Air Asia"},
    //         {image : "{{Air_India}}", title : "Air India"},
    //         {image : {Indigo}, title : "Indigo"},
    //         {image : {Spice_Jet}, title : "Spice Jet"}
    //     ]
    //
    //     const renderCard = (card, index) => {
    //         return(
    //             <div className="App">
    //                 <Card style={{ width: '18rem' }}>
    //                     <Card.Img variant="top" src={card.image} />
    //                     <Card.Body>
    //                         <Card.Title>{card.title}</Card.Title>
    //                         <Button variant="primary">View</Button>{' '}
    //                         <Button variant="primary">Visit</Button>{' '}
    //                     </Card.Body>
    //                 </Card>
    //             </div>
    //         )
    //     }
    //
    //     return(
    //         <div className="App">
    //             {cardInfo.map(renderCard)}
    //         </div>
    //     )
    // }


    render() {
        return (
            <div className={`${style.boddy}`}>
                <div className="justify-content-center" style={{padding:"20px"}}>
                    <h2>Popular Flights</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <CardView  src={`${Air_Asia}`}  title={"Air Asia"}/>
                        <CardView  src={`${Air_India}`}  title={"Air India"}/>
                        <CardView  src={`${Spice_Jet}`}  title={"Spice Jet"}/>
                        <CardView  src={`${Indigo}`}  title={"Indigo"}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePopularFlights
