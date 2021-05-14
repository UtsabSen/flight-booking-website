import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link} from "react-router-dom";
import axios from "axios";
import {Card, Container, Form, Row, Col, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import {isAuthenticated} from "../Services/Functions";

class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            email : "",
            password : "",
            redirect : "",
            alert : false,
            tried_login : false
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            tried_login : true
        })

        axios.post("http://localhost:8090/api/login", data)
            .then(res => {
                console.log(res)
                localStorage.setItem("data", JSON.stringify(res.data));
                if(res.data.role === "Customer") {
                    this.setState({
                        redirect: "Customer",
                        alert : true,
                    })
                } else if(res.data.role === "Admin"){
                    this.setState({
                        redirect : "Admin",
                        alert : true
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    };


    render() {
        if(this.state.redirect === "Customer"){
            return <Redirect to={"/user-dashboard"} />
        } else if (this.state.redirect === "Admin"){
            return <Redirect to={"/admin"} />
        }

        if(isAuthenticated()){
            return <Redirect to={"/home"}/>
        }
        // let msg = this.state.alert ? <div className={"alert-danger"}><label>Wrong Email or Password</label></div> : ""
        return (
            <div className="pt-lg-5">
                <div className="card card-body col-lg-6 offset-md-3 pt-md-4 alert-primary">
                    {/*{msg}*/}
                    {!this.state.alert && this.state.tried_login ? <div className={"alert-danger"}><label>Wrong Email or Password</label></div> : ""}
                    <Form onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Log In</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" required className="form-control" placeholder="Enter Email" value={this.state.email}
                                   onChange={(e) => this.setState({email : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required placeholder="Enter Password" value={this.state.password}
                                   onChange={(e) => this.setState({password : e.target.value})}/>
                        </div>
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                    </Form>
                </div>
                <div className="w-100 text-center mt-2">
                    Need an account <Link to="/registration"><a href="#">Register?</a></Link>
                </div>
            </div>
        )
    }

}

export default LoginForm
