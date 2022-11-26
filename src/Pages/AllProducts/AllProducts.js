import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const allCars = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-2 justify-items-center'>
            {
                allCars.map(cars => <div key={cars._id} className="card w-96 bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={cars.pictures} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{cars.carName}</h2>
                        <p>{cars.description.slice(0, 50)}</p>
                        <div className="card-actions">
                            <Link className="btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk mr-5">Buy Now</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllProducts;