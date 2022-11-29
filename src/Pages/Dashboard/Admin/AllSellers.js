import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllSellers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/seller');
            const data = await res.json();
            return data
        }
    });

    return (
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (<tr key={user._id}>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td><Link className='btn colorGray hover:text-white rounded-none hover:border-none bg-colorYellow bg-colorYellowDk'>Make verified</Link></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default AllSellers;