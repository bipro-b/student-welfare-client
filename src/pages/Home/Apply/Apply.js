
// import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

import './Apply.css';

const Shipping = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { bookId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const choosedBook = details.find(
            serv => serv._id === bookId
        );
        setBookDetails(choosedBook);
    }, [details, bookId])


    const onSubmit = data => {

        axios.post('https://warm-meadow-41881.herokuapp.com/applies', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Applied successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <NavBar />
            <div className='row take'>

                <Col col-md-12 >
                    <div className="fform">
                        <h3 style={{ color: 'white' }}>Fill the form for Application</h3>
                        <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} />
                        <form onSubmit={handleSubmit(onSubmit)} className='point'>
                            <input defaultValue={bookDetails?.name} {...register("name", { required: true })} placeholder="Your Full name" />
                            <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />
                            <input  {...register("position", { required: true })} placeholder="designation" />
                            <input type="number" {...register("sscpassed")} placeholder="ssc Passed year like 2016" />

                            <input type="address" {...register("location")} placeholder="Location" />
                            <input type="number" {...register("phone")} placeholder="your phone number" />
                            <input {...register('pic')} placeholder="upload  image/url" />

                            <input type="submit" />
                        </form>

                    </div>
                </Col>
            </div>
            <Footer />
        </>
    );
};

export default Shipping;