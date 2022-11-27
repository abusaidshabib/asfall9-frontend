import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const newreg = {
                    email: data.email,
                    name: data.name,
                    category: data.category,
                }

                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newreg)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {

                        }
                    })
            })
            .catch(error => console.log(error));
    }



    return (
        <div className="hero py-10">
            <div className="card flex-shrink-0 w-full max-w-sm">
                <h1 className='text-6xl text-center font-black uppercase'>
                    Register Form<br />
                </h1>
                <form className="card-body" onSubmit={handleSubmit(handleSignUp)}>

                    <div className='form-control'>
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Full Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="FULL NAME" className="input input-bordered rounded-none" />
                        {errors.name && <p className='text-red-700' role="alert">Name is required</p>}
                    </div>

                    <div className='form-control'>
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Email</span>
                        </label>
                        <input {...register("email", { required: "Email is required" })} type="email" placeholder="EMAIL" className="input input-bordered rounded-none" />
                        {errors.email && <p className='text-red-700' role="alert">Email is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} type="password" placeholder="PASSWORD" className="input input-bordered rounded-none" />
                        {errors.password && <p className='text-red-700' role="alert">{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>select buyer or seller</span>
                        </label>
                        <select {...register("category", { required: true })} className="select input input-bordered font-normal text-sm uppercase rounded-none">
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <p>Already have an account <Link to="/login" className="text-secondary underline">Please Login</Link></p>
                    <input className='btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" />
                </form>
                <hr />
                <div className="card-body">
                    <div className="form-control">
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;