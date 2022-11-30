import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import SingleProduct from './SingleProduct';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/carsdata?email=${user?.email}`;

    const { data: cars = [], isLoading, refetch } = useQuery({
        queryKey: ['cars', user?.email],
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

    const handleStatus = id => {
        fetch(`http://localhost:5000/carsdata/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }

    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/carsdata/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(" deleted successfully")
                }
            })
    }

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
                        cars?.map(car => <SingleProduct key={car._id} car={car}
                            refetch={refetch}
                            handleDeleteProduct={handleDeleteProduct}
                            handleStatus={handleStatus}
                        ></SingleProduct>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyProducts;