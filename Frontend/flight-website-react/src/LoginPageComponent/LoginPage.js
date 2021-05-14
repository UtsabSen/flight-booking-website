import React, {Component, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {Form} from "react-bootstrap";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import LoginForm from "./LoginForm";

class LoginPage extends Component{

    render() {

        return (
            <div>
                <HomeNavbar/>
                <LoginForm/>
            </div>
        )
    }
}

export default LoginPage
