import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [cat, setCat] = useState('');

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/category')
            .then(res => res.json())
    })


    return (
        <div className='py-10 2xl:mx-60'>
            <h1 className='text-6xl font-black uppercase colorGray text-center'>
                Categories
            </h1>
            <div className='grid grid-cols-3 justify-items-center pt-10'>
                {
                    categories.map(category => <Link to={`/category/${category.categories}`} className='btn btn-outline colorGray rounded-none' key={category._id}>
                        {category.categories}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;