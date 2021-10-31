import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Destinations = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    places.map(place => <Place key={place.id} place={place}></Place>)
                }
            </div>
        </div>
    );
};

export default Destinations;
