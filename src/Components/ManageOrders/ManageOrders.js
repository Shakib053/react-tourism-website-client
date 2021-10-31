import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <div className="row row-cols-1  g-4">
                {
                    orders.map(order => <SingleOrder order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;