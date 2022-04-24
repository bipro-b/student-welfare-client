import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
// import './CustomerReview.css'

const GiveReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://intense-wildwood-59281.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfullt');
                    reset();
                }
            })
    }
    return (
        <>

            <div className="add-car">
                <h3 style={{ color: 'white' }}>Give a Review about our Club </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />

                    <textarea {...register("comment")} placeholder="Write your comment" />
                    <input type="number" {...register("rating")} placeholder="rating us 0-5" />

                    <input type="submit" />
                </form>

            </div>
            <Footer></Footer>
        </>
    );
};

export default GiveReview;