
// import { Grid, Typography } from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

import NavBar from '../../Shared/NavBar/NavBar';
import './Apply.css';
// const imgulr = { 'https://youtu.be/JulvhQvhA00'}
const Shipping = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { bookId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        fetch('https://intense-wildwood-59281.herokuapp.com/members')
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

        axios.post('https://intense-wildwood-59281.herokuapp.com/applies', data)
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
                        <span style={{ color: 'white', fontSize: '20px' }}>Hey, {user?.displayName}</span>
                        {/* <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} /> */}
                        <form onSubmit={handleSubmit(onSubmit)} className='point'>
                            <input defaultValue={bookDetails?.name} {...register("name", { required: true })} placeholder="Your Full name" />
                            <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />
                            <input  {...register("position", { required: true })} placeholder="designation" />
                            <input type="number" {...register("sscpassed")} placeholder="ssc Passed year like 2016" />

                            <input type="address" {...register("location")} placeholder="Location" />
                            <input type="number" {...register("phone")} placeholder="your phone number" />
                            <input {...register('pic')} placeholder="upload  image/url" />

                            <input style={{ backgroundColor: 'goldenrod' }} type="submit" />
                        </form>

                    </div>
                </Col>
                <div>
                    <h3 className='mx-auto' style={{ color: 'yellow' }}>Please see the video to make your image url</h3>
                    <iframe title="Image URL" width="300" height="370px"
                        src="https://www.youtube.com/embed/JulvhQvhA00">
                    </iframe>
                </div>

            </div>


        </>
    );
};

export default Shipping;