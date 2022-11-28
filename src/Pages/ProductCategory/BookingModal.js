import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const BookingModal = ({ product, refetch }) => {
    const {pictures, carName, resalePrice} = product;
    const { user } = useContext(AuthContext);
    console.log(product);



    const handleSend = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const product = carName;
        const productPrice = resalePrice;
        const phoneNumber = form.pnumber.value;
        const meetingLocation = form.mlocation.value;
        const productImg = pictures;
        form.reset();
        // console.log(name, email, product, productPrice, phoneNumber, meetingLocation, productImg);

        const booking = {
            email, name, product,  phoneNumber, meetingLocation, productImg, productPrice,
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Item is booked');
                    refetch();
                }
            })
            .catch(error => console.log(error));
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{carName}</h3>
                    <form onSubmit={handleSend} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name='name' disabled defaultValue={user?.displayName} type="text" className="input input-bordered rounded-none" />

                        <input name='email' disabled defaultValue={user?.email} type="email" className="input input-bordered rounded-none" />

                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Product price</span>
                        </label>
                        <input name='productSell' disabled defaultValue={resalePrice} type="number" className="input input-bordered rounded-none" />

                        <input name='pnumber' placeholder='YOUR PHONE NUMBER' type="tel" className="input input-bordered rounded-none" />

                        <input name='mlocation' placeholder='MEETING LOCATION' type="text" className="input input-bordered rounded-none" />

                        <input className='btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" value="Submit" />
                    </form>
                </div>

            </div>
            <ToastContainer />
        </>
    );
};

export default BookingModal;