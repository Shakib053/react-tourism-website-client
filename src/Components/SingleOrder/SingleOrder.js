import React, { useEffect, useState } from 'react';

const SingleOrder = (props) => {
    const { name, persons, days, email, _id, address, status } = props.order;

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
                    alert('Are you sure you want to delete it?');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    const handleApproval = id => {
        const url = `https://safe-temple-87819.herokuapp.com/orders/${id}`;
        // const ExactData = orders.filter(td => td._id == id)
        // const updatedStatus = { status: "Approved" };
        // console.log(ExactData);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful !!! Please Refresh the page for changes');
                    setOrders({});
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
                <h5>Customer Address : <span ><small>{address}</small></span></h5>
                <button className="mx-3 my-3 btn-warning p-2" onClick={() => handleDelete(_id)}>Delete</button>
                <button className="btn-primary p-2" onClick={() => handleApproval(_id)} >{status}</button>
            </div>

        </div>
    );
};

export default SingleOrder;