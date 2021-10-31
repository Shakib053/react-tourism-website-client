import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PlaceDetails.css'

const PlaceDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://safe-temple-87819.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    const ExactData = data.filter(td => td._id == id)
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">



            <div className="col">
                <div className="card">
                    <img src={ExactData[0]?.img} alt="" srcset="" />
                </div>
            </div>

            <div className="col">
                <div className="p-5 card">
                    <h1 className="title">{ExactData[0]?.name}</h1>
                    <h3 className="text-capitalize">overview</h3>
                    <p className="text-capitalize">{ExactData[0]?.description}</p>
                    <h5 >Language Spoken : <span className="details">{ExactData[0]?.language}</span></h5>
                    <h5 >Currency Used : <span className="details">{ExactData[0]?.currency}</span></h5>
                    <h5 >Country : <span className="details">{ExactData[0]?.country}</span></h5>
                    <h5 >Reviewed By : <span className="details">{ExactData[0]?.reviews}</span></h5>
                    <h5 >Ratings : <span className="details">{ExactData[0]?.rating}</span></h5>
                    <h5 >Tour Period : <span className="details">{ExactData[0]?.days}</span> days</h5>
                    <h5 >Minimum : <span className="details">{ExactData[0]?.persons} </span> Persons</h5>
                    <Link className="mx-auto" to='/takeOrders'>
                        <button className="w-100 btn btn-warning text-center"> Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;