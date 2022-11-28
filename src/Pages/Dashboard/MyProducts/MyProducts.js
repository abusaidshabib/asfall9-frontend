import React from 'react';
import SingleProduct from './SingleProduct';

const MyProducts = () => {
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
                        <SingleProduct></SingleProduct>
                    </tbody>
                </table>
            </div>

    );
};

export default MyProducts;