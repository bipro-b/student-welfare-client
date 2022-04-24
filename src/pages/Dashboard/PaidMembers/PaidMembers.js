import React, { useEffect, useState } from 'react';
import './Paid.css'
const PaidMembers = () => {
    const [paidMember, setPaidMember] = useState([]);

    useEffect(() => {
        fetch('https://intense-wildwood-59281.herokuapp.com/payments')
            .then(res => res.json())
            .then(data => setPaidMember(data));
    }, [])
    return (

        <div className='mem'>
            <h3 style={{ color: 'white' }}>Manage all Members</h3>
            <div className='title'>
                <div>
                    Name
                </div>
                <div>
                    Phone Number
                </div>
                <div>
                    Pay to

                </div>
                <div>
                    Amount(BDT)
                </div>

            </div>
            {
                paidMember.map(pay => <div className='edit my-2 ' key={pay._id}>

                    <div>
                        {pay.name}
                    </div>
                    <div>
                        {pay.phone}
                    </div>

                    <div>
                        {pay.payto}
                    </div>
                    <div>
                        {pay.amount}
                    </div>
                </div>)
            }

        </div>

    );
};

export default PaidMembers;