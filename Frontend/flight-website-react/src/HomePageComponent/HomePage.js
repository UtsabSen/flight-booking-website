import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import HomeNavbar from "./HomeNavbar";
import HomeCarousel from "./HomeCarousel";
import HomePopularFlights from "./HomePopularFlights";
import HomeBooking from "./HomeBooking";
import HomeAbout from "./HomeAbout";

class HomePage extends Component{
    render() {
        return(
            <div className="App">
                <HomeNavbar/>
                <HomeCarousel/>
                <HomePopularFlights/>
                {/*<HomeBooking/>*/}
                <HomeAbout/>
            </div>
        )
    }

}
export default HomePage;
