import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useToken from '../../hooks/useToken';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userData = {
                    displayName: data.name
                }
                updateUser(userData)
                    .then(() => {
                        newUser(data.email, data.name, data.category)
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }


    const newUser = (email, name, category) => {
        const newreg = {
            email: email,
            name: name,
            category: category,
        }
        console.log(newreg);

        fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newreg)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setUserEmail(email);
                    toast.success('User Create Successfully')
                    reset();
                }
                else{
                    toast.error(data.message)
                }
            })
            .catch(err => console.err(err))
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
                            <option>buyer</option>
                            <option>seller</option>
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