import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';


const AddProduct = () => {
useTitle('AddProduct');

    const { user } = useContext(AuthContext);
    const recDate = new Date();
    const formatDate = format(recDate, "PP");
    const [pictures, setPictures] = useState();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const carName = form.pname.value;
        const originalPrice = form.oprice.value;
        const resalePrice = form.rprice.value;
        const condition = form.condition.value;
        const sellerName = form.name.value;
        const categories = form.category.value;
        const description = form.description.value;
        const buyear = form.byear.value;
        const use = form.uyear.value;
        const postime = form.ptime.value;
        const location = form.location.value;
        const phoneNumber
        = form.mobile.value;
        const status = "available";

        // share link of image
        const image = form.img.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                setPictures(imgData.data.url)
            }
        })

        const newProduct = {
            email, carName, originalPrice, resalePrice, condition, sellerName, categories, description, use, postime, location, phoneNumber
            , status, pictures, buyear
        }

        fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/carsdata', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item added');
                form.reset();
            })
            .catch(error => console.log(error));

    }

    return (
        <div className="hero py-10">
            <div className="card w-full">
                <h1 className='text-6xl text-center font-black uppercase'>
                    add products<br />
                </h1>
                <form onSubmit={handleAddProduct} className="xl:px-32 2xl:px-60" >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <div className='grid grid-cols-1 gap-3 mt-10'>
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Product Name</span>
                            </label>
                            <input name='pname' placeholder='PRODUCT NAME' type="text" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Image</span>
                            </label>
                            <input name='img' className='file-input w-full max-w-xs' type="file"/>

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Original Price</span>
                            </label>
                            <input name='oprice' placeholder='ORIGINAL PRICE' type="number" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Resell Price</span>
                            </label>
                            <input name='rprice' placeholder='RESELLER PRICE' type="number" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Select product condition</span>
                            </label>

                            <select name='condition' className="select input input-bordered font-normal text-sm uppercase rounded-none">
                                <option>excellent</option>
                                <option>good</option>
                                <option>fair</option>
                            </select>

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Your Name</span>
                            </label>
                            <input name='name' disabled defaultValue={user?.displayName} type="text" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Your Email</span>
                            </label>
                            <input name='email' disabled defaultValue={user?.email} type="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className='grid grid-cols-1 gap-3 mt-10'>
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Select product category</span>
                            </label>
                            <select name='category' className="select input input-bordered font-normal text-sm uppercase rounded-none">
                                <option>aston</option>
                                <option>ferrari</option>
                                <option>Jaguar</option>
                            </select>
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Description</span>
                            </label>
                            <input name='description' placeholder='DESCRIPTION' type="text" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Year of use</span>
                            </label>
                            <input name='uyear' placeholder='USE YEAR' type="number" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Buy Year</span>
                            </label>
                            <input name='byear' placeholder='BUY YEAR' type="number" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Post time</span>
                            </label>
                            <input name='ptime' disabled defaultValue={formatDate} type="text" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Location</span>
                            </label>
                            <input name='location' placeholder='LOCATION' type="text" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Mobile Number</span>
                            </label>
                            <input name='mobile' placeholder='MOBILE' type="tel" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <br />
                    <input className='w-full btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" value="Submit" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;