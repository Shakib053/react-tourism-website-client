import React, { useRef } from 'react';

const OrderTake = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const personsRef = useRef();
    const daysRef = useRef();

    const handleOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const persons = personsRef.current.value;
        const days = daysRef.current.value;
        const newUser = { name, persons, days, email };
        console.log(JSON.stringify(newUser));

        fetch('https://safe-temple-87819.herokuapp.com/takeOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Fill Up Details to confirm order</h2>
            <form onSubmit={handleOrder} className="text-center">
                <input placeholder="Booking Name" ref={nameRef} type="text" />
                <br />
                <input type="text" placeholder="Please add an email" ref={emailRef} />
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