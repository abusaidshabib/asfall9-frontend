import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllBuyers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/seller');
            const data = await res.json();
            return data
        }
    });

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users.map(user => (<tr key={user._id}>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td><Link className='btn text-white hover:text-gray-800 border-gray-800 rounded-none btn-warning'>Delete</Link></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;