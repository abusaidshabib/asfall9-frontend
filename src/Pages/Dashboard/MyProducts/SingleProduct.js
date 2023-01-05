import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';


const SingleProduct = ({ car, handleDeleteProduct, handleStatus }) => {
    useTitle("SingleProduct");
    const { status, pictures, carName, resalePrice, _id } = car;



    return (
        <tr className="hover text-center">
            <th>{status}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle object-cover w-12 h-12">
                        <img src={pictures} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{carName}</td>
            <td>{resalePrice}</td>
            <td><Link onClick={() => handleStatus(_id)} className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'>Change Status</Link></td>
            <td>
                <Link onClick={() => handleDeleteProduct(_id)} className='btn bg-colorGray border-none rounded-none hover:text-black hover:bg-white'>Delete</Link>
            </td>
        </tr>
    );
};

export default SingleProduct;