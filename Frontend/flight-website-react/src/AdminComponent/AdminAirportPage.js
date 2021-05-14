import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
class AdminAirportPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            airports : [],
            id : 0,
            name : "",
            location : "",
            code : ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8092/api/airports")
            .then((res) => {
                this.setState({
                    airports : res.data,
                    id : 0,
                    name : "",
                    location : "",
                    code : ""
                })
            }).catch(err => {
            console.log(err)
        })
    }

    submit(event, id) {
        event.preventDefault();
        if(id === 0){
            axios.post("http://localhost:8092/api/add-airport",{
                name : this.state.name,
                location : this.state.location,
                code : this.state.code
            }).then((res) => {
                this.componentDidMount();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        } else {
            axios.put("http://localhost:8092/api/update-airport", {
                id : id,
                name : this.state.name,
                location : this.state.location,
                code : this.state.code
            }).then((res) => {
                this.componentDidMount();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    delete(id){
        axios.delete("http://localhost:8092/api/" + id)
            .then((res) => {
                this.componentDidMount();
                console.log(res)
            }).catch(err => {
                console.log(err)
        })
        console.log("delete invoked")
    }

    edit(id){
        console.log("edit id : ",id)
        axios.get("http://localhost:8092/api/airports/" + id)
            .then((res) => {
                this.setState({
                    id : res.data.id,
                    name : res.data.name,
                    location : res.data.location,
                    code : res.data.code
                })
                console.log(res)
            }).catch(err => {
            console.log(err)
        })
        console.log("edit invoked")
    }

    render() {

        return (
            <div>
                <HomeNavbar/>
                <div className="card card-body">

                    <h1>Welcome to Airport</h1>
                    <div className="row">
                        <div className="col-lg-3 s3 l3">
                            <form onSubmit={(e) =>{this.submit(e, this.state.id)}}>
                                <div className="form-group">
                                    <label>Airport Name</label>
                                    <input type="text" className="form-control" required placeholder="Airport name" value={this.state.name}
                                           onChange={(e) => this.setState({name : e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Airport Location</label>
                                    <input type="text" className="form-control" required placeholder="Airport location" value={this.state.location}
                                           onChange={(e) => this.setState({location : e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Airport Code</label>
                                    <input type="text" className="form-control" required placeholder="Airport code" value={this.state.code}
                                           onChange={(e) => this.setState({code : e.target.value})}/>
                                </div>
                                <button className="btn btn-dark btn-lg btn-block" type="submit">Submit</button>
                            </form>
                        </div>

                        <div className="col-lg-9 s9 l9">
                            <table className="table table-bordered table-secondary text-center">
                                <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Location</td>
                                    <td>Code</td>
                                    <td colSpan="2">Actions</td>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    this.state.airports.map(airport =>
                                        <tr key={airport.id}>
                                            <td>{airport.name}</td>
                                            <td>{airport.location}</td>
                                            <td>{airport.code}</td>
                                            <td>
                                                <button className="btn btn-warning"
                                                        onClick={(e) => this.edit(airport.id)} type="submit" name="action">
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger"
                                                        onClick={(e) => this.delete(airport.id)} type="submit" name="action">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAirportPage;
