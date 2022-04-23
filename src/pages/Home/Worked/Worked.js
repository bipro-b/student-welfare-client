
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Worked = () => {
    const [services, setServices] = useState([]);
    // fake data is loading from json 
    useEffect(() => {
        fetch('/about.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='services'>

            <Container className="my-2  ">
                <div className="mx-auto d-flex justify-content-center my-2">
                    <h3 style={{ color: 'AppWorkspace' }}><p className='animate'>Our held activities</p></h3>
                </div>
                <Row sm={1} md={2} lg={3} className="gy-2 mb-2 mx-auto serv" >

                    {/* products.map((product, index) => {
                            if (index >= 6) return null;
                            return (
                                <Product key={product.name} product={product}></Product>
                            )
                        }) */}

                    {
                        services.map((service, index) => {
                            if (index >= 3) return null;
                            return (

                                <Container className="service  ">

                                    <Col className="  mb-3" >
                                        <div className="photo-frame">
                                            <div className="photo">
                                                <img src={service.img} style={{ height: '300px' }} alt="" />
                                            </div>
                                            <div className=" photo-detail">
                                                <h2 id="program">Program: {service.program} </h2>
                                                {service.description}
                                            </div>
                                        </div>

                                    </Col>
                                </Container>



                            )
                        }
                        )


                    }
                </Row>
            </Container>
            <div className='mb-3'>
                <Link to="/gallery"> <button className="btn btn-primary ">See All programs</button></Link>
            </div>

        </div>
    );
};

export default Worked;