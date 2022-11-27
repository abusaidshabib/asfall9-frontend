import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const recDate = new Date();
    const formatDate = format(recDate, "PP");


    const handleAddProduct = event => {
        const form = event.target;
        const email = form.email.value;
        const carName = form.pname.value;
        const originalPrice = form.oprice.value;
        const resalePrice = form.rprice.value;
        const condition = form.condition.value;
        const sellerName = form.name.value;
        const categories = form.category.value;
        const description = form.description.value;
        const useyear = form.uyear.value;
        const postime = form.ptime.value;



        const newProduct = {
            email,carName, originalPrice, resalePrice, condition, sellerName, categories, description, useyear, postime

            // "_id": "63813189fc13ae683f00139e",
            // "index": 1,
            // "categories": "Aston",
            // "categoryId": "1",
            // "carName": "Aston Martin Valhalla",
            // "description": "Aerodynamics and awesomeness collide in the Aston Martin Valhalla Concept Car. This outstanding car, aka “The Son of Valkyrie” is an all-new performance-bred predator that incorporates concepts and technologies taken directly from F1™.",
            // "condition": "Good",
            // "pictures": "https://i.ibb.co/jvrx48z/Aston-Martin-Valhalla-Concept-Car.webp",
            // "originalPrice": 10638264,
            // "resalePrice": 5376297,
            // "buyYear": 2017,
            // "use-year": 6,
            // "sellerName": "Orbadiah Bernt",
            // "location": "3508 North Center",
            // "phoneNumber": "+63 (481) 533-1207"
        }

        fetch('http://localhost:5000/carsdata', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                }
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
                            <input required name='pname' placeholder='PRODUCT NAME' type="text" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Original Price</span>
                            </label>
                            <input required name='oprice' placeholder='ORIGINAL PRICE' type="number" className="input input-bordered rounded-none" />

                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Resell Price</span>
                            </label>
                            <input required name='rprice' placeholder='RESELLER PRICE' type="number" className="input input-bordered rounded-none" />

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
                            <input required name='name' disabled defaultValue={user?.email} type="text" className="input input-bordered rounded-none" />
                        </div>
                        <div className='grid grid-cols-1 gap-3 mt-10'>
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Select product category</span>
                            </label>
                            <select name='category' className="select input input-bordered font-normal text-sm uppercase rounded-none">
                                <option>Aston</option>
                                <option>Ferrari</option>
                                <option>Jaguar</option>
                            </select>
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Description</span>
                            </label>
                            <input required name='description' placeholder='DESCRIPTION' type="text" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Year of use</span>
                            </label>
                            <input required name='uyear' placeholder='YEAR' type="number" className="input input-bordered rounded-none" />
                            <label className="label">
                                <span className='font-semibold text-sm tracking-wider uppercase'>Post time</span>
                            </label>
                            <input required name='ptime' disabled defaultValue={formatDate} type="text" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <br />
                    <input className='w-full btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;