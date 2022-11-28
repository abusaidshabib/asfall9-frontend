import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';

const ProductCard = ({car, setProduct}) => {
    const {pictures, carName, originalPrice, resalePrice, sellerName, location, phoneNumber, use} = car;

    return (
        <div className="card w-96 bg-base-100 my-10 rounded-none">
            <figure><img className='rounded-xl' src={pictures} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {carName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className='grid grid-cols-2 justify-between'>
                    <p><b>Original price</b><del> ${originalPrice}</del></p>
                    <p><b>Resell price</b><del> ${resalePrice}</del></p>
                </div>
                <p><b>Use-year</b> = {use}</p>
                <p>posted time</p>
                <span className='grid grid-cols-2'><p><b>Seller Name =</b>{sellerName}</p> <BsShieldFillCheck className='text-blue-800' /> </span>

                <p><b>Address =</b> {location}</p>
                <p><b>Phone Number =</b> {phoneNumber}</p>
                <p></p>
                <div className="card-actions justify-center">
                    <label onClick={() => setProduct(car)} htmlFor="booking-modal" className='btn btn-outline colorGray rounded-none'>Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;