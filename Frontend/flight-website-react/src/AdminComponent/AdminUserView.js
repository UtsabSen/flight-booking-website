import React, {Component} from "react";
import axios from "axios";
import {Alert, Jumbotron, Table} from "react-bootstrap";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Link} from "react-router-dom";
import {logData} from "../Services/Functions";

class AdminUserView extends Component{

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
            role : ""

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
                role : res.data.role
            })
            // console.log(res)
        })
    }

    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="container">
                    <Jumbotron className={`text-white ${this.state.role === "Admin" ? "bg-success" : "bg-info"}`}>
                        <h2>Name : {this.state.firstName} {this.state.lastName}</h2>
                        <h3>Email : {this.state.email}</h3>
                        <h3>Phone : {this.state.phone}</h3>
                        {
                            this.state.role === "Admin" ?
                                <Link to={`/admin`} className="btn btn-warning btn-md float-right">
                                    Admin Dashboard
                                </Link>
                                : <Link to={`/user-dashboard`} className="btn btn-warning btn-md float-right">
                                    Customer Dashboard
                                </Link>
                        }
                        <Link to={`/admin/edit-users/${logData().id}`} className="btn btn-warning btn-md mr-2 float-right">
                            Edit
                        </Link>
                    </Jumbotron>

                    <table className="table table-striped table-bordered hover text-left">
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Username</h4>
                                </td>
                                <td>
                                    <h4>{this.state.username}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Gender</h4>
                                </td>
                                <td>
                                    <h4>{this.state.gender}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Date Of Birth</h4>
                                </td>
                                <td>
                                    <h4>{this.state.dob}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Phone No</h4>
                                </td>
                                <td>
                                    <h4>{this.state.phone}</h4>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default AdminUserView;
