
import React from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../../Images/b1.jpg';
import b2 from '../../../Images/b2.jpg';
import b3 from '../../../Images/b3.jpg';
import b4 from '../../../Images/b4.jpg';

import './Banner.css';
const Banner = () => {
    return (

        <Carousel className='banner'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={b3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Welcome to</h2>
                    <h2>Lakhanda Student Welfare Association.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={b2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>We provide educations kits</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={b4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Our team</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={b1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>We held many educational ceremony </h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;