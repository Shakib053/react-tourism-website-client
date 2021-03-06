import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Destinations = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    places.map(place => <Place key={place._id} place={place}></Place>)
                }
            </div>
        </div>
    );
};

export default Destinations;
