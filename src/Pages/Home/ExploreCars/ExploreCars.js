import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import SingleCars from './SingleCars';

const ExploreCars = () => {

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/carsdata')
            .then(res => res.json())
    })


    return (
        <div className='pt-10 2xl:mx-60'>
            <h1 className='text-6xl py-10 font-black uppercase colorGray text-center'>
                Explore Cars
            </h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={`https://images.unsplash.com/photo-1647579153115-053ca3c03a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Why We are deferent!</h1>
                        <p className="py-6">we Provide cars with 100% seftly and create great bonding between buyers and sellers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCars;