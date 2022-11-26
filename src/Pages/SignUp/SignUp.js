import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';

const SignUp = () => {
const {register, formState: { errors } ,handleSubmit} = useForm()

const handleSignUp = data =>{
    console.log(data);
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
                        <span className='font-semibold text-sm tracking-wider uppercase'>Email</span>
                    </label>
                    <input {...register("email",{required:true})} type="text" placeholder="EMAIL" className="input input-bordered rounded-none" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className='font-semibold text-sm tracking-wider uppercase'>Password</span>
                    </label>
                    <input {...register("password",{required:true})} type="password" placeholder="PASSWORD" className="input input-bordered rounded-none" />
                </div>

                {/* <div className="form-control">
                    <label className="label">
                        <span className='font-semibold text-sm tracking-wider uppercase'>Confirm Password</span>
                    </label>
                    <input {...register("password")} type="password" placeholder="CONFIRM PASSWORD" className="input input-bordered rounded-none" />
                </div> */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className='font-semibold text-sm tracking-wider uppercase'>select buyer or seller</span>
                    </label>
                    <select {...register("category", { required: true })} className="select input input-bordered font-normal text-sm uppercase rounded-none">
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                </div>
                <input className='btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" />
            </form>
            <hr/>
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