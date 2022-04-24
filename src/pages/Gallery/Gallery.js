import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../Shared/NavBar/NavBar';
import './Gallery.css'
const Gallery = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        fetch('./about.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])
    return (
        <div >
            <NavBar />
            <Container className='pb-4'>
                <Row sm={1} md={2} lg={3} className="  g-3">
                    {
                        image.map(ab => (

                            <Container className=' ' >


                                <div className="photo-frame">
                                    <div className="photo">
                                        <img src={ab.img} style={{ height: '300px' }} alt="" />
                                    </div>
                                    <div className=" photo-detail">
                                        <h2 id="program">Program: {ab.program} </h2>
                                        {ab.description}
                                    </div>
                                </div>

                            </Container>
                        ))
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Gallery;