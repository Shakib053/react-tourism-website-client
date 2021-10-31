import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const ExactData = orders.filter(td => td.email == user.email)
    console.log(ExactData);

    return (
        <div>
            <div className="row row-cols-1  g-4">
                {
                    ExactData.map(order => <SingleOrder order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;