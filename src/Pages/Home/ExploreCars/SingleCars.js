import React from 'react';
import { Link } from 'react-router-dom';

const SingleCars = ({ car }) => {
    const {pictures, carName, description} = car;
    return (
        <div className="card w-96 bg-base-100">
            <figure className="px-10 pt-10">
                <img src={pictures} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{carName}</h2>
                <p>{description.slice(0, 50)}</p>
                <div className="card-actions">
                    <Link className="btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk mr-5">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCars;