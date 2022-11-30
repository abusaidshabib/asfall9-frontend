import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import SingleCars from '../ExploreCars/SingleCars';

const AdvertisedItem = () => {

    const url = `https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/status/available`;

    const { data: cars = []} = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='py-10 2xl:mx-60'>
        <h1 className='text-6xl font-black uppercase colorGray text-center'>
            Advertised card
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

export default AdvertisedItem;