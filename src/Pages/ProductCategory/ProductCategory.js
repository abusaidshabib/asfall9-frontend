import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const ProductCategory = () => {
    useTitle("ProductCategory")
    // const [cars, setCars] = useState([]);
    const [product, setProduct] = useState(null);
    const _id = localStorage.getItem('category');

    const {data: cars = [], refetch, isLoading} = useQuery({
        queryKey: ['cars', _id],
        queryFn: async () =>{
            const res = await fetch(`https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/category/${_id}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <progress className="progress w-56"></progress>
    }


    return (
        <div className='grid grid-cols-2 justify-between justify-items-center'>
            {
                cars.map(car => (
                    <ProductCard key={car._id} car={car} setProduct={setProduct}></ProductCard>
                ))
            }
            {
                product && <BookingModal product={product}
                setProduct={setProduct}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCategory;