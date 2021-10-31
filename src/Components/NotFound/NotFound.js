import React from 'react';
import image from './notfound.png'

const NotFound = () => {
    return (
        <div className="mx-auto p-5 text-center">
            <img className="w-75 text-center" src={image} alt="" srcset="" />
            <h1 className="my-5">Please Go To Another Page</h1>
        </div>
    );
};

export default NotFound;