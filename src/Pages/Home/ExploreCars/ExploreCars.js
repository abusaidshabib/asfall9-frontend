import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCars from './SingleCars';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('carsdata.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    return (
        <div className='py-10 2xl:mx-60'>
            <h1 className='text-6xl font-black uppercase colorGray text-center'>
                Explore Cars
            </h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center'>
                {/* Single Cards */}
                {
                    cars.map((car, dex) => dex < 3 && <SingleCars key={car._id} car={car}></SingleCars>)
                }
            </div>
            <div className='text-center'>
                <Link to="/allcars" className="btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk mr-5">See all products</Link>
            </div>
        </div>
    );
};

export default ExploreCars;