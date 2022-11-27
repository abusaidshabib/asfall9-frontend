import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const BookingModal = () => {
    const { user } = useContext(AuthContext);


    const handleSend = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const product = form.product.value;
        console.log(name, email, product);

        const booking = {
            email, name, product
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
                }
            })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Your Sections</h3>
                    <form onSubmit={handleSend} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name='name' disabled defaultValue={user?.displayName} type="text" className="input input-bordered rounded-none" />
                        <input name='email' disabled defaultValue={user?.email} type="email" className="input input-bordered rounded-none" />
                        <input name='product' disabled defaultValue="itemName" type="email" className="input input-bordered rounded-none" />
                        <input className='btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" value="Submit" />
                    </form>
                </div>

            </div>
            <ToastContainer />
        </>
    );
};

export default BookingModal;