
// import { Grid, Typography } from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

import './Pay.css';

const PayFee = () => {
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

        axios.post('https://intense-wildwood-59281.herokuapp.com/payments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submitted successfully');
                    reset();
                }
            })

    }
    return (
        <>

            <div className='row take'>
                <div className='pay'>
                    <h2 style={{ color: 'black' }}>Please pay to our koshadokkho</h2>
                    <h3 style={{ backgroundColor: 'black', color: 'red' }}>Obviously fill the form otherwise you will be shown unpaid</h3>
                </div>
                <Col col-md-12 >
                    <div className="fform">

                        <span style={{ color: 'white', fontSize: '20px' }}>Hey, {user?.displayName}</span>
                        <h4 style={{ color: 'white' }}>fill the form ☺️ </h4>
                        <form onSubmit={handleSubmit(onSubmit)} className='point'>
                            <input defaultValue={bookDetails?.name} {...register("name", { required: true })} placeholder="Your Full name" />

                            <input type="number" {...register("phone", { required: true })} placeholder="your phone number" />
                            <input type="number" {...register("amount", { required: true })} placeholder="Write amount" />

                            <input type="string" {...register("tid")} placeholder="TnxId of Bkash/others" />
                            <input type="string" {...register("payto", { required: true })} placeholder="Name/Sent Bkash number" />
                            q
                            <input style={{ backgroundColor: 'goldenrod' }} type="submit" />
                        </form>

                    </div>
                </Col>


            </div>


        </>
    );
};

export default PayFee;