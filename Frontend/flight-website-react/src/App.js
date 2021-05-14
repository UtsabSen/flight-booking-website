import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "./HomePageComponent/HomePage";
import LoginPage from "./LoginPageComponent/LoginPage";
import RegistrationForm from "./LoginPageComponent/RegistrationForm";
import UserDetails from "./LoginPageComponent/UserDetails";
import FlightPage from "./FlightComponent/FlightPage";
import AdminPage from "./AdminComponent/AdminPage";
import FlightView from "./FlightComponent/FlightView";
import AdminUserData from "./AdminComponent/AdminUserData";
import AdminUserView from "./AdminComponent/AdminUserView";
import AdminUserEdit from "./AdminComponent/AdminUserEdit";
import HomeNavbar from "./HomePageComponent/HomeNavbar";
import AdminFlightsData from "./AdminComponent/AdminFlightsData";
import UserDashboardPage from "./LoginPageComponent/UserDashboardPage";
import AdminFlightEdit from "./AdminComponent/AdminFlightEdit";
import AdminFlightAdd from "./AdminComponent/AdminFlightAdd";
import ErrorPage from "./ErrorComponent/ErrorPage";
import AdminAirportPage from "./AdminComponent/AdminAirportPage";
import PrivateRoute from "./Services/PrivateRoute";
import CheckAdminRoute from "./Services/CheckAdmin";
import BookingPage from "./BookingComponent/BookingPage";
import TicketPage from "./BookingComponent/TicketPage";
import BookFlight from "./BookingComponent/BookFlight";

function App() {
    return (
        <div>
            {/*<HomeNavbar/>*/}
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/home" component={HomePage}/>

                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/registration" component={RegistrationForm}/>
                <PrivateRoute exact path="/users" component={UserDetails}/>
                <Route exact path="/users" component={UserDetails}/>

                <Route exact path="/flights" component={FlightPage}/>
                <Route exact path="/flight/:id" component={FlightView}/>

                <PrivateRoute exact path="/user-dashboard" component={UserDashboardPage}/>
                <PrivateRoute exact path="/profile/:id" component={AdminUserView}/>

                <PrivateRoute exact path="/booking" component={BookingPage}/>
                <PrivateRoute exact path="/ticket/:id" component={TicketPage}/>
                <PrivateRoute exact path="/book-flight" component={BookFlight}/>

                <CheckAdminRoute exact path="/admin" component={AdminPage}/>

                <CheckAdminRoute exact path="/admin/users" component={AdminUserData}/>
                <CheckAdminRoute exact path="/admin/users/:id" component={AdminUserView}/>
                <PrivateRoute exact path="/admin/edit-users/:id" component={AdminUserEdit}/>

                <CheckAdminRoute exact path="/admin/flights" component={AdminFlightsData}/>
                <CheckAdminRoute exact path="/admin/add-flights" component={AdminFlightAdd}/>
                <CheckAdminRoute exact path="/admin/edit-flight/:id" component={AdminFlightEdit}/>

                <CheckAdminRoute exact path="/admin/airports" component={AdminAirportPage}/>

                <Route path="*" component={ErrorPage}/>
            </Switch>
        </div>
  );
}

export default App;
