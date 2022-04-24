import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

// import './About.css'

const About = () => {
    const [about, setAbout] = useState([]);
    //Fake data is loading 
    useEffect(() => {
        fetch('https://intense-wildwood-59281.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])

    // Now render it to show in UI
    return (
        <div >

            <NavBar />
            <Container className="my-5">
                <div className="mx-auto d-flex justify-content-center">
                    <p style={{ width: "500px", color: "white", backgroundColor: "grey", borderRadius: "7px", textAlign: "left", padding: "10px" }}>Group members list of our teams are given with their activities.The members of our group are much dedicated . They are alwayas ready for support for leanrer.
                    </p>
                </div>

                <Row md={2} lg={3} className=" mx-auto g-5">
                    {
                        about.map(ab => (

                            <Container className=' ' >

                                <Col className=" ">
                                    <Card className=" d-flex justify-content-center align-items-center card h-100 mx-auto about">
                                        <Card.Img style={{ width: '200px', height: '200px', marginTop: '40px', borderRadius: "50%" }} variant="top" src={ab.pic} />
                                        <Card.Body>
                                            <Card.Title>Name:{ab.name}
                                            </Card.Title>
                                            <h4>Designation: {ab.position}</h4>
                                            <Card.Title>SSC:{ab.sscpassed}
                                            </Card.Title>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            </Container>
                        ))
                    }

                </Row>

            </Container>
            <Footer />
        </div>
    );
};

export default About; <h3>About me </h3>