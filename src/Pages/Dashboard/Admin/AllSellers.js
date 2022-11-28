import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/buyer');
            const data = await res.json();
            return data
        }
    });

    return (
        <div>
            <p>{user.length}</p>
        </div>
    );
};

export default AllSellers;