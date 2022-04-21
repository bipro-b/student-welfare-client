import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Worked = () => {
    const [services, setServices] = useState([]);
    // fake data is loading from json 
    useEffect(() => {
        fetch('/worked.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='services'>

            <Container className="my-2  ">
                <div className="mx-auto d-flex justify-content-center my-2">
                    <h3 style={{ color: 'AppWorkspace' }}><p className='animate'>Our held activities</p></h3>
                </div>
                <Row sm={1} md={2} lg={3} className="gy-2 mb-5 mx-auto serv" >

                    {
                        services.map(service => (

                            <Container className="service  ">

                                <Col className="  mb-3" >
                                    <Card className="snap  card h-100">
                                        <Card.Img style={{ height: '190px' }} variant="top" src={service?.img} />
                                        <Card.Body>
                                            <Card.Title>
                                                {service?.program}
                                            </Card.Title>
                                            <Card.Title >
                                                {service?.description}
                                            </Card.Title>
                                            {/* <p >Category: {category}</p> */}
                                            {/* <p>Price:{price} ৳</p> */}
                                        </Card.Body>

                                    </Card>


                                </Col>
                            </Container>

                            //  <Service key={service.key} service={service}></Service>



                        ))

                    }
                </Row>
            </Container>


        </div>
    );
};

export default Worked;