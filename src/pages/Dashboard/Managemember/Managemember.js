import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Managemember.css'
const Managemember = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://warm-meadow-41881.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://warm-meadow-41881.herokuapp.com/members/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining);
                    }

                })
        }
    }



    return (
        <>

            <div className='mem'>
                <h3 style={{ color: 'white' }}>Manage all Members</h3>
                <div className='title'>
                    <div>
                        Name
                    </div>
                    <div>
                        Designation
                    </div>
                    <div>
                        Deletion
                    </div>

                    <div>
                        Payment Status
                    </div>

                </div>
                {
                    cars.map(car => <div className='edit my-2 ' key={car._id}>

                        <div>
                            {car.name}
                        </div>
                        <div>
                            {car.position}
                        </div>

                        <div>
                            <Button onClick={() => handleDelete(car._id)} variant="text">Delete</Button>
                        </div>
                        <div>
                            paid
                        </div>




                        {/*< div className='col' > <h3 style={{ marginLeft: '30px', textAlign: 'left' }}>{car.course}</h3></div>
                        <div className='col ' style={{ alignItems: 'center' }} >
                            <Button onClick={() => handleDelete(car._id)} variant="contained">Delete</Button>
                        </div> */}
                    </div>)
                }
            </div>

        </>
    );
};

export default Managemember;