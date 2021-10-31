import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderTake = () => {
    const { user } = useAuth();

    const personsRef = useRef();
    const daysRef = useRef();
    const desRef = useRef();
    const addressRef = useRef();

    const handleOrder = e => {
        const name = user.displayName;
        const des = desRef.current.value;
        const email = user.email;
        const persons = personsRef.current.value;
        const days = daysRef.current.value;
        const address = addressRef.current.value;
        const newUser = { name, persons, days, email, des, address };

        fetch('https://safe-temple-87819.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Processed Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-center my-5 text-primary">Please Fill Up Details to confirm order</h2>
            <form onSubmit={handleOrder} className="text-center">
                <h5>User Name </h5>
                <input placeholder="Booking Name" defaultValue={user.displayName} type="text" />
                <br />
                <h5>User's Emailaddress </h5>
                <input type="text" placeholder="Please add an email" defaultValue={user.email} />
                <br />
                <h5>Type the place's name you want to visit  </h5>
                <input type="text" placeholder="Please add your destination" ref={desRef} />
                <br />
                <h5>How many persons you want to take with you?  </h5>
                <input type="text" placeholder="for how many persons" ref={personsRef} />
                <br />
                <h5>Durations : </h5>
                <input type="text" placeholder="for how many days" ref={daysRef} />
                <br />
                <h5>Address : </h5>
                <input type="text" placeholder="your present address" ref={addressRef} />
                <br />
                <input type="submit" className="my-5 px-3 btn btn-info" value="Add" />
            </form>
        </div>
    );
};

export default OrderTake;