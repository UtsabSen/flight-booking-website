import React, {Component} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {isAuthenticated} from "../Services/Functions";
import {Redirect} from "react-router-dom";


class UserDetails extends Component{

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
            role: ""

        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/api/users").then((res) => {
            this.setState({
                users: res.data.reverse(),
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
            })
        })
    }

    render() {
        console.log(this.state.users)
        if(!isAuthenticated()){
            return <Redirect to={"/login"}/>
        }
        return (
            <div>
                <HomeNavbar/>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(user =>
                                user.role === "Customer" ?
                                    (
                                        <tr key={user.id}>
                                            <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ) : null

                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default UserDetails;
