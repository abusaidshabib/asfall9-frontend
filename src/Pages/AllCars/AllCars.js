import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllCars = () => {
useTitle("Cars");

    const cars = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center'>
            {
                cars.map(car => 
                    <div key={car._id} className="card w-96 bg-base-100 my-10 rounded-none">
                    <figure><img className='rounded-xl' src={car.pictures} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {car.carName}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <div className='grid grid-cols-2 justify-between'>
                            <p><b>Original price</b><del> ${car.originalPrice}</del></p>
                            <p><b>Resell price</b><del> ${car.originalPrice}</del></p>
                        </div>
                        <p><b>Use-year</b> = {car.use}</p>
                        <p>posted time</p>

                        <p><b>Address =</b> {car.location}</p>
                        <p><b>Phone Number =</b> {car.phoneNumber}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllCars;