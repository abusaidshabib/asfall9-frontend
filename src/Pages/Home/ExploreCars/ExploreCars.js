import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import SingleCars from './SingleCars';

const ExploreCars = () => {

    const {data:cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/carsdata')
            .then(res => res.json())
    })


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