import React, {Component} from "react";
import {Button, ButtonGroup, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import UserTickets from "../LoginPageComponent/UserTickets";

class AdminPage extends Component{
    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="container pt-lg-5">
                    <div className={"row text-center"}>
                        <div className={"col-md-4"}>
                            <Link to={"/admin/users"}>
                                <div className="card card-body">
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/500x400/?admin"
                                    />
                                    <h3>Manage User</h3>
                                </div>
                            </Link>
                        </div>
                        <div className={"col-md-4"}>
                            <Link to={"/admin/flights"}>
                                <div className="card card-body">
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/500x400/?aeroplane"
                                    />
                                    <h3>Manage Flights</h3>
                                </div>
                            </Link>
                        </div>
                        <div className={"col-md-4"}>
                            <Link to={"/admin/airports"}>
                                <div className="card card-body">
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/500x400/?airport"
                                    />
                                    <h3>Manage Airports</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-3">
                    <UserTickets/>
                </div>
            </div>
        );
    }
}

export default AdminPage;
