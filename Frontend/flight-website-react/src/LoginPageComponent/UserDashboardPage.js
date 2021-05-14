import React, {Component} from "react";
import HomeNavbar from "../HomePageComponent/HomeNavbar";
import UserTickets from "./UserTickets";

class UserDashboardPage extends Component{
    render() {
        return (
            <div>
                <HomeNavbar/>
                <div className="pt-3">
                    <UserTickets/>
                </div>
            </div>
        );
    }
}
export default UserDashboardPage
