import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    const ExactData = data.filter(td => td.id == id)
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">



            <div className="col">
                <div className="card">
                    <img src={ExactData[0]?.img} alt="" srcset="" />
                </div>
            </div>

            <div className="col">
                <div className="p-5 card">
                    <h3 className="text-capitalize">overview</h3>
                    <p className="text-capitalize">{ExactData[0]?.description}</p>
                    <h5>Language Spoken : {ExactData[0]?.language}</h5>
                    <h5>Currency Used : {ExactData[0]?.currency}</h5>
                    <h5>Country : {ExactData[0]?.country}</h5>
                    <h5>Reviewed By : {ExactData[0]?.reviews}</h5>
                    <h5>Ratings : {ExactData[0]?.rating}</h5>
                    <h5>Tour Period : {ExactData[0]?.days} days</h5>
                    <h5>Minimum : {ExactData[0]?.persons} Persons</h5>
                    <Link className="mx-auto" to={`/placeDetails/${id}`}>
                        <button className="w-100 btn btn-warning text-center"> Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;