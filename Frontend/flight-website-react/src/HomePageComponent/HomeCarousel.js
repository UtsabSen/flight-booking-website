import React, {Component} from "react";

import {Carousel} from "react-bootstrap";

class HomeCarousel extends Component{

    render() {
        let welcome = <div>
            <Carousel.Caption>
                <h1 style={{textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"}}>WELCOME TO INDIAN AIRLINES</h1>
                <p style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>TRAVEL MAKES EASY</p>
            </Carousel.Caption>
        </div>

        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1400x400/?aeroplane"
                            alt="First slide"
                        />
                        {welcome}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1400x400/?airbus"
                            alt="Second slide"
                        />
                        {welcome}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1400x400/?airline"
                            alt="Third slide"
                        />
                        {welcome}
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomeCarousel
