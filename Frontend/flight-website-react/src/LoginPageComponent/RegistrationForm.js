import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {Form, Row, Col} from "react-bootstrap";
import ReactPhoneInput from "react-phone-input-2";

class RegistrationForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            firstName: "",
            lastName: "",
            gender : "",
            dob : "",
            phone : "",
            username : "",
            email : "",
            password : "",
            role : "",
            isRegistered : ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/api/users")
            .then((res) => {
                this.setState({
                    users: res.data,
                    id : 0,
                    firstName: "",
                    lastName: "",
                    gender: "Male",
                    dob: "",
                    phone : "",
                    username: "",
                    email: "",
                    password: "",
                    role : "Customer",
                })
            })
    }

    submit(event, id){
        event.preventDefault();
        console.log(id);
        if(id === 0){
            axios.post("http://localhost:8090/api/add-user", {
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                gender : this.state.gender,
                dob : this.state.dob,
                phone : this.state.phone,
                username : this.state.username,
                email : this.state.email,
                password : this.state.password,
                role : this.state.role
            }).then(() => {
                this.componentDidMount();
                this.state.isRegistered = true
            })
            alert("Response Submitted")
        } else {
            axios.put("http://localhost:8090/api/update-user", {
                id : id,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                gender : this.state.gender,
                dob : this.state.dob,
                phone : this.state.phone,
                username : this.state.username,
                email : this.state.email,
                password : this.state.password,
                role : this.state.role
            }).then(() => {
                // console.log("email : ", this.state.email)
                this.componentDidMount();
            })
        }
    }
    //
    // delete(id){
    //     axios.delete("http://localhost:8090/api/" + id)
    //         .then(() => {
    //             this.componentDidMount();
    //         })
    // }
    //
    // edit(id) {
    //     axios.get("http://localhost:8090/api/users/" + id)
    //         .then((res) => {
    //             this.setState({
    //                 id : res.data.id,
    //                 firstName : res.data.firstName,
    //                 lastName : res.data.lastName,
    //                 gender : res.data.gender,
    //                 dob : res.data.dob,
    //                 phone : res.data.phone,
    //                 username : res.data.username,
    //                 email : res.data.email,
    //                 password : res.data.password
    //             })
    //         })
    // }


    render() {

        if(this.state.isRegistered){
            return <Redirect to={"/login"}/>
        }

        return(
            <div className="pt-lg-5">
                <HomeNavbar/>
                <Link to="/users">USERS</Link>

                <div className="card card-body col-lg-6 offset-md-3 pt-md-4 alert-primary">
                    <form onSubmit={(e) => this.submit(e, this.state.id)}>
                        <h3 className="text-center">Register</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First name" required value={this.state.firstName}
                                   onChange={(e) => this.setState({firstName : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" required value={this.state.lastName}
                                   onChange={(e) => this.setState({lastName : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <Row className="form-group">
                                <Col sm={4}>
                                    <label>Gender</label>
                                    <Form.Control as="select" value={this.state.gender} required onChange={(e) => this.setState({gender : e.target.value})}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Control>
                                </Col>
                                <Col sm={4}>
                                    <label>Role</label>
                                    <Form.Control as="select" value={this.state.role} required onChange={(e) => this.setState({role : e.target.value})}>
                                        <option value="Customer">Customer</option>
                                        <option value="Admin">Admin</option>
                                    </Form.Control>
                                </Col>
                                <Col sm={4}>
                                    <label>Date Of Birth</label>
                                    <input type="date" className="form-control" required placeholder="dd-mm-yyyy" value={this.state.dob}
                                           onChange={(e) => this.setState({dob : e.target.value})}/>
                                </Col>
                            </Row>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" className="form-control" required placeholder="Enter phone" value={this.state.phone}
                                   onChange={(e) => this.setState({phone : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" required placeholder="Enter Username" value={this.state.username}
                                   onChange={(e) => this.setState({username : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Enter email" value={this.state.email}
                                   onChange={(e) => this.setState({email : e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required placeholder="Enter password"  value={this.state.password}
                                   onChange={(e) => this.setState({password : e.target.value})}/>
                        </div>
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                    </form>
                </div>
                <div className="w-100 text-center mt-2">
                    Already registered <Link to="/login"><a href="#">log in?</a></Link>
                </div>
            </div>
        )
    }
}

export default RegistrationForm
