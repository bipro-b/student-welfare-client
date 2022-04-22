import React, { useEffect, useState } from 'react';
import './ManageApplies.css'
const ManageApplies = () => {
    const [applies, setApplies] = useState([])
    useEffect(() => {
        fetch('https://warm-meadow-41881.herokuapp.com/applies')
            .then(res => res.json())
            .then(data => setApplies(data));
    }, [])
    return (
        <>

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
                    applies.map(apply => <div key={apply._id}>
                        <div className='allenr my-2'>
                            <div>
                                {apply?.name}
                            </div>
                            <div>
                                {apply.sscpassed}
                            </div>
                            <div>
                                {apply.position}
                            </div>

                            <div>
                                {apply.pic}
                            </div>

                        </div>


                    </div>)
                }
            </div>

        </>
    );
};

export default ManageApplies;