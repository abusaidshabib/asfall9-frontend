import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            _id: 1,
            category: 'Aston',
        },
        {
            _id: 2,
            category: 'Ferrari',
        },
        {
            _id: 3,
            category: 'Jaguar',
        }
    ]

    return (
        <div className='py-10 2xl:mx-60'>
            <h1 className='text-6xl font-black uppercase colorGray text-center'>
                Categories
            </h1>
            <div className='grid grid-cols-3 justify-items-center pt-10'>
                {
                    categories.map(category => <Link to='/category' className='btn btn-outline colorGray rounded-none' key={category._id}>
                        {category.category}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;