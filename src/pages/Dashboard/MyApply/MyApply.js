import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MyApply.css'
const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://intense-wildwood-59281.herokuapp.com/applies?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://intense-wildwood-59281.herokuapp.com/applies/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }
    return (
        <>

            <div className='myapp'>
                <h3 style={{ color: 'black' }}>My Application</h3>
                <div className='enrtitle'>
                    <div>
                        Name
                    </div>
                    <div>
                        Designation
                    </div>
                    <div>
                        Cancelaion
                    </div>

                </div>
                {
                    orders.map(order => <div key={order._id}>

                        <div className='enr my-2'>
                            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                <img src={order.pic} style={{ width: '30px', borderRadius: '50%' }} alt="" />  {order.name}
                            </div>
                            <div>
                                {order.position}
                            </div>
                            <div>
                                <Button onClick={() => handleDelete(order._id)} variant="text">Delete</Button>
                            </div>

                        </div>



                    </div>)
                }
            </div>

        </>
    );
};

export default MyOrder;