import React, { useEffect, useState } from 'react';

const SingleOrder = (props) => {
    const { name, persons, days, email, _id } = props.order;
    console.log(props.order);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = id => {
        const url = `https://safe-temple-87819.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Delete it?');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    console.log(_id);
    return (
        <div className="text-center">

            <div className="border border-3 m-3 p-3">
                <h3>Booking Name : <span className="text-primary">{name}</span></h3>
                <h3>Booking Email id : <span className="text-primary">{email}</span></h3>
                <h3>For : {persons} Persons</h3>
                <h4>For : {days} Days</h4>
                <button className="mx-3 btn-warning p-2" onClick={() => handleDelete(_id)}>Delete</button>
                <button className="btn-warning p-2" >Approve</button>
            </div>

        </div>
    );
};

export default SingleOrder;