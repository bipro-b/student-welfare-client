import React, { useEffect, useState } from 'react';
import './ManageApplies.css'
const ManageApplies = () => {
    const [applies, setApplies] = useState([])
    useEffect(() => {
        fetch('https://intense-wildwood-59281.herokuapp.com/applies')
            .then(res => res.json())
            .then(data => setApplies(data));
    }, [])

    return (
        <>
            <h3>All application</h3>

            <div className='apply'>
                <h3 style={{ color: 'white' }}>All application</h3>
                <div className='title'>
                    <div>
                        Name
                    </div>
                    <div>
                        SSC Year
                    </div>
                    <div>
                        Designation
                    </div>

                    <div>
                        Image Url
                    </div>

                </div>


                {
                    applies.map(order => <div key={order._id}>
                        <div className='allenr my-2'>
                            <div>
                                {order?.name}
                            </div>
                            <div>
                                {order.sscpassed}
                            </div>
                            <div>
                                {order.position}
                            </div>
                            <div>
                                <img src={order.pic} style={{ width: '30px', borderRadius: '50%' }} alt="" />
                            </div>

                        </div>



                    </div>)
                }


            </div>
        </>
    );
};

export default ManageApplies;