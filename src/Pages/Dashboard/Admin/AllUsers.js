import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/user/${id}`, {
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
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (<tr key={user._id}>
                            <th>{user.name}</th>
                            <td>{user.email}</td>
                            <td><Link className='btn colorGray hover:text-white rounded-none hover:border-none bg-colorYellow bg-colorYellowDk'>Make admin</Link></td>
                            <td><Link onClick={() => handleDeleteProduct(user._id)} className='btn rounded-none btn-outline'>Delete</Link></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;