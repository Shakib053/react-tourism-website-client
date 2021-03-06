import React, { useEffect, useState } from 'react';
import image from './travel-banner.jpg'
import image1 from './b-1.PNG'
import signature from './signature.png'
import './Home.css'
import Place from '../Place/Place';
import { Link } from 'react-router-dom';
const Home = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    const newPlaces = places.slice(0, 4);
    return (
        <div className="container">
            <div className="container-fluid ">
                <h1 className="text-center pt-5">Welcome to <span className="text-uppercase text-warning">travel booking agency</span></h1>
                <h3 className="text-center text-capitalize banner-title">Enjoy your stay</h3>
                <p className="text-center text-capitalize pb-5 banner-des">discover amazing places at exclusive deals.we will be glad to have you as our valuable customer</p>
                <img src={image} style={{ width: "100%", paddingBottom: "50px" }} alt="" srcset="" />

            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 ">
                <div className="col ">
                    <div className="card border border-2 p-3 h-100">
                        <h2>It’s Time For a New Adventure! Don’t Wait Any Longer.</h2>
                        <br />
                        <img src={signature} className="img-fluid w-25" alt="" srcset="" />
                        <p>CEO Foundation</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-2 p-3 h-100 banner-middle">
                        <p>Our team of travel insiders is obsessed with finding the best things to do everywhere we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler. And we are proud to say that after 17 experience-packed years, we are the world leader. When planning your trip, why start anywhere else?</p>
                    </div>
                </div>
                <div className="col" >
                    <div className="card border border-2 p-2 h-100">
                        <img src={image1} className="img-fluid w-100" alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="text-center service-title">
                <h4 className="text-warning text-capitalize p-2">explore what's new is added</h4>
                <h1 className="text-capitalize mb-5">recommended</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    newPlaces.map(place => <Place key={place.id} place={place}></Place>)
                }
            </div>
            <div className="mx-auto text-center m-5 ">
                <Link to='/destinations'>
                    <button className="all-destinations p-2">See Our All Offerings</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;