import React, {Component} from "react";
import axios from "axios";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link, useHistory} from "react-router-dom";
import {Col, Form, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class AdminUserEdit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            id : 0,
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone : "",
            username: "",
            email: "",
            password: "",
            role : "",
            isupdated : ""
        }
    }

    componentDidMount() {
        this.id = this.props.match.params.id;
        // console.log("componentdidmount id: ", this.id);
        axios.get(`http://localhost:8090/api/users/${this.id}`).then((res) => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                gender: res.data.gender,
                dob: res.data.dob,
                phone : res.data.phone,
                username : res.data.username,
                email : res.data.email,
                password: res.data.password,
                role : res.data.role,
                isUpdated : false
            })
            // console.log(res)
            // console.log(this.id)
        })
    }

    update(event, id){
        event.preventDefault();
        axios.put("http://localhost:8090/api/update-user",{
            id : id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            dob: this.state.dob,
            phone : this.state.phone,
            username: this.state.username,
            email : this.state.email,
            password : this.state.password,
            role : this.state.role
        }).then(
            res => {
                console.log(res);
                this.setState({
                    isUpdated : true
                })
            }
        )

        // console.log("gen:" , this.state.gender);
    }

    render() {
        // const redirectToReferrer = this.state.redirectToReferrer;
        // if (redirectToReferrer) {
        //     console.log("redirectToReferrer : ", redirectToReferrer);
        //     return <Redirect to="/home" />
        // }else{
        //     console.log("Hello")
        // }
        if(this.state.isUpdated){
            return <Redirect to={"/admin/users"}/>
        }
        return (


            <div className="pt-lg-5">
                <HomeNavbar/>

                <div className="card card-body col-lg-6 offset-md-3 pt-md-4 alert-primary">
                    <form onSubmit={(e) => this.update(e, this.id)}>
                        <h3 className="text-center">Edit User</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" required placeholder="First name" value={this.state.firstName}
                                   onChange={(e) => this.setState({firstName : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" required placeholder="Last name" value={this.state.lastName}
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
                                    <input type="text" className="form-control" required placeholder="dd-mm-yyyy" value={this.state.dob}
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
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Update</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AdminUserEdit;
