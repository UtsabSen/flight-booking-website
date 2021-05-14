import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
// import "../../node_modules/jquery/dist/jquery.min"
import {Link} from "react-router-dom";
import LoginPage from "../LoginPageComponent/LoginPage";
import {Redirect} from "react-router";
import axios from "axios";
import {isAuthenticated, logData, logout} from "../Services/Functions";

class HomeNavbar extends Component{
    // state={
    //     authenticated : false
    // }
    //
    // componentWillMount() {
    //     if(isAuthenticated()){
    //         this.setState({
    //             authenticated : true
    //         })
    //     }
    // }



    render() {

        // let navdata =
        //     this.state.authenticated ?
        //         <Nav>
        //             <Link className="btn btn-primary mr-5">Profile</Link>
        //             <Link> <Button onClick={()=>{logout(); this.setState({
        //                 authenticated: false
        //             })}} variant="primary">Log Out</Button> </Link>
        //         </Nav>
        //         :
        //         <Nav>
        //             <Link to="/login"> <Button variant="primary">Log In</Button> </Link>
        //         </Nav>


        console.log("Is Auth : ", isAuthenticated())
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>AIRLINES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className={"text-white pt-2 pr-3"}>Home</Link>
                            <Link to="/flights" className={"text-white pt-2 pr-3"}>Flights</Link>
                            <Link to="/booking" className={"text-white pt-2 pr-3"}>Book</Link>
                            <a className={"text-white pt-2 pr-3"} href={"/#about"}>About Us</a>
                        </Nav>

                        {/*{}
                        {/*    this.state.authenticated ?*/}
                        {/*        <Nav>*/}
                        {/*            <Link className="btn btn-primary mr-5">Profile</Link>*/}
                        {/*            <Link to="/home"> <Button onClick={()=>{logout(); this.setState({*/}
                        {/*                authenticated: false*/}
                        {/*            })}} variant="primary">Log Out</Button> </Link>*/}
                        {/*        </Nav>*/}
                        {/*        :*/}
                        {/*        <Nav>*/}
                        {/*            <Link to="/login"> <Button variant="primary">Log In</Button> </Link>*/}
                        {/*        </Nav>*/}
                        {/*}*/}

                        {/*{navdata}*/}

                        {
                            isAuthenticated() ? (
                                <Nav>
                                    <Link className="btn btn-primary mr-2" to={`/profile/${logData().id}`}>Profile</Link>
                                    <Link to="/home"> <Button onClick={()=>{logout()}} variant="primary">Log Out</Button> </Link>
                                </Nav>
                                ):   (
                                <Nav>
                                    <Link to="/login"> <Button variant="primary">Log In</Button> </Link>
                                </Nav>
                            )
                        }

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )

    }
}

export default HomeNavbar
