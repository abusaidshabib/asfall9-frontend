import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Categories = () => {
    const {getCategory} = useContext(AuthContext);

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/category')
            .then(res => res.json())
    })


    return (
        <div className='py-10 2xl:mx-60'>
            <h1 className='text-6xl font-black uppercase colorGray text-center'>
                Categories
            </h1>
            <div className='grid grid-cols-3 justify-items-center pt-10'>
                {
                    categories.map(category => <Link onClick={()=>getCategory(`${category.categories}`)} to={`/category/${category._id}`} className='btn btn-outline colorGray rounded-none' key={category._id}>
                        {category.categories}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;