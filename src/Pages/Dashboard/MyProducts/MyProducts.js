import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import SingleProduct from './SingleProduct';

const MyProducts = () => {

    const { user } = useContext(AuthContext);


    const { data: cars = [], refetch, isLoading } = useQuery({
        queryKey: ['cars', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carsdata/${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    return (

        <div className="overflow-x-auto justify-items-center">
            <table className="table w-full">
                <thead>
                    <tr className='text-center'>
                        <th>status</th>
                        <th>image</th>
                        <th>Product Name</th>
                        <th>price</th>
                        <th>change status</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars?.map(car => <SingleProduct key={car._id} car={car}></SingleProduct>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyProducts;