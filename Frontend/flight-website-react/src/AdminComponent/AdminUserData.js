import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class AdminUserData extends Component{

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

    delete(id){
        axios.delete("http://localhost:8090/api/" + id)
            .then(() => {
                this.componentDidMount();
            })
    }

    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="container">
                    <table className="table table-dark table-responsive-md text-center text-white justify-content-center mt-3">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th colSpan="3">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>

                                    <td>
                                        <Link to={`/admin/users/${user.id}`} className="btn btn-primary btn-md">
                                            View
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to={`/admin/edit-users/${user.id}`} className="btn btn-primary btn-md">
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <Link> <Button variant="danger" onClick={(e)=>this.delete(user.id)}>Delete</Button> </Link>
                                    </td>
                                    <td>

                                    </td>

                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default AdminUserData;
