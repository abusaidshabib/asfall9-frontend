import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import BookingModal from './BookingModal';

const ProductCategory = () => {
    const updateDate = new Date();

    return (
        <div className="card w-96 bg-base-100 my-10 rounded-none">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    name
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className='grid grid-cols-2 justify-between'>
                    <p>$original price</p>
                    <p>$resale price</p>
                </div>
                <p>Year of use</p>
                <p>posted time</p>
                <p>{`${updateDate}`}</p>
                <span className='grid grid-cols-2'><p>Seller name</p> <BsShieldFillCheck className='text-blue-800' /> </span>

                <p>location</p>
                <p></p>
                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal" className='btn btn-outline colorGray rounded-none'>Book Now</label>
                </div>
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default ProductCategory;