import React from 'react';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const { _id, name, img, rating, price, persons, days } = props.place;
    console.log(props);
    return (
        <div className="col p-3">
            <div className="card h-100 p-1">
                <img src={img} className="card-img-top w-75 mx-auto" alt="" srcset="" />
                <div class="card-body">
                    <h3 className="card-title text-center my-3">{name}</h3>
                    <p className="card-text text-center"><strong>Price : ${price}</strong></p>
                </div>
                <div className="d-flex justify-content-around my-3">
                    <div className="d-flex justify-content-center ">
                        <p className="mx-2"> <i class="fas fa-calendar-plus"></i></p>
                        <p>{days} days</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="mx-2">   <i class="fas fa-users"></i></p>
                        <p>{persons}+</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="mx-2"><i class="fas fa-star"></i></p>
                        <p>{rating}</p>
                    </div>

                </div>
                <Link className="mx-auto" to={`/placeDetails/${_id}`}>
                    <button className="w-100 btn btn-warning text-center"> Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Place;