import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const AllBuyers = () => {
useTitle("Buyers");

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/user/buyer');
            const data = await res.json();
            return data
        }
    });

    const handleDeleteProduct = id => {
        fetch(`https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/user/${id}`, {
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
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full text-center">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        users.map(user => (<tr key={user._id}>
                            <th>{user.name}</th>
                            <td>{user.email}</td>
                            <td>{user._id}</td>
                            <td><Link onClick={() => handleDeleteProduct(user._id)} className='btn rounded-none btn-outline'>Delete</Link></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;