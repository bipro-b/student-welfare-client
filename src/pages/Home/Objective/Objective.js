import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Objective.css'
const Objective = () => {
    return (
        <div className='back'>
            <Container className='obj'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ms-3 "
                    id="product">
                    <div className="col-12 col-md-6 col-lg-4" style={{ color: 'white' }}>
                        <i className="far fa-address-card" style={{ fontSize: '100px', color: 'black' }}></i>
                        <h2>Communication Build</h2>
                        <p>So it really behaves like neither.
                            Now we have given up. </p>

                    </div>
                    <div className="col-12 col-md-6 col-lg-4" style={{ color: 'white' }}>
                        <i className="fas fa-sitemap" style={{ fontSize: '100px', color: 'white' }}></i>
                        <h2>Support For students</h2>
                        <p>They were used to create the
                            machines that launched </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4" style={{ color: 'white' }}>
                        <i className="fas fa-user-friends" style={{ fontSize: '100px', color: 'black' }}></i>
                        <h2>Cell against addiction</h2>
                        <p style={{ textAlign: 'center' }}>So it really behaves like neither.
                            Now we have given up. </p>

                    </div>
                </div>

            </Container>
            <Container className='mx-auto' style={{ backgroundColor: 'rgba(0, 0, 0, 0.696)', padding: '30px' }}>
                <h2 style={{ color: 'white' }}>Apply for new member</h2>
                <Link to="/apply"> <button className="btn btn-success ">Apply</button></Link>
            </Container>
        </div>
    );
};

export default Objective;