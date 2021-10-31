import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderTake = () => {
    const { user } = useAuth();

    const personsRef = useRef();
    const daysRef = useRef();
    const desRef = useRef();

    const handleOrder = e => {
        const name = user.displayName;
        const des = desRef.current.value;
        const email = user.email;
        const persons = personsRef.current.value;
        const days = daysRef.current.value;
        const newUser = { name, persons, days, email, des };

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
            <h2>Please Fill Up Details to confirm order</h2>
            <form onSubmit={handleOrder} className="text-center">
                <input placeholder="Booking Name" defaultValue={user.displayName} type="text" />
                <br />
                <input type="text" placeholder="Please add an email" defaultValue={user.email} />
                <br />
                <input type="text" placeholder="Please add your destination" ref={desRef} />
                <br />
                <input type="text" placeholder="for how many persons" ref={personsRef} />
                <br />
                <input type="text" placeholder="for how many days" ref={daysRef} />
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default OrderTake;