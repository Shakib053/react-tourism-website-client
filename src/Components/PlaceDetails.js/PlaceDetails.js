import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/destinations.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    const ExactData = data.filter(td => td.id == id)
    console.log(ExactData);
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">



            <div className="col">
                <div className="card">
                    <img src={ExactData[0]?.img} alt="" srcset="" />
                </div>
            </div>

            <div className="col">
                <div className="p-2 card">
                    <h3 className="text-capitalize">overview</h3>
                    <p className="text-capitalize">{ExactData[0]?.description}</p>
                    <h5>Language Spoken : {ExactData[0]?.language}</h5>
                    <h5>Currency Used : {ExactData[0]?.currency}</h5>
                    <h5>Country : {ExactData[0]?.country}</h5>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;