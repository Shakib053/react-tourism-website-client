import React from 'react';
import image from './about1.jpg'

const AboutUs = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
            <div className="col">
                <div className="card">
                    <img src={image} alt="" srcset="" />
                </div>
            </div>
            <div className="col">
                <div className="p-5 card">
                    <h3 className="text-capitalize">we offer</h3>
                    <h2 className="text-capitalize"><strong>fast & reliable</strong></h2>
                    <h2 className="text-capitalize text-warning">Discover Amazing Places At Exclusive Deals.We Will Be Glad To Have You As Our Valuable Customer</h2>
                    <p>Our main target is to facilitate the process of travelling around the world.We always try to provide wordl class facility towards our customers.Our main concern is sustainable advanced technology to provide our customer the best possible service. </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;