import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link} from "react-router-dom";

class ErrorPage extends Component{
    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="card card-body">
                    <div className="jumbotron mt-lg-5 jumbotron-fluid text-center">
                        <h1>ERROR</h1>
                        <h2>404 NOT FOUND</h2>
                    </div>
                    <Link to={"/"} className={"btn btn-outline-success center"}>Back to home</Link>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
