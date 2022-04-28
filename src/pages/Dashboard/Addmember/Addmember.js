import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './Addmember.css';

const Addmember = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://intense-wildwood-59281.herokuapp.com/members', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Member added successfully');
                    reset();
                }
            })
    }
    return (
        <>

            <div className="add-car">
                <h3 style={{ color: 'white' }}>Add new Member</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="number" {...register("sscpassed")} placeholder="ssc passed year" />
                    <input {...register("position", { required: true, maxLength: 50 })} placeholder="Designation" />
                    {/* <input {...register("location", { required: true, maxLength: 20 })} placeholder="Location" /> */}
                    {/*   <textarea {...register("category")} placeholder="
                    description" /> */}
                    <input {...register('pic')} placeholder="upload image" />
                    <input type="submit" />
                </form>

            </div>

        </>
    );
};

export default Addmember;