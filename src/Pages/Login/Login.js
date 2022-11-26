import React, { useState } from 'react';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data);
        console.log(errors);
    }


    return (
        <div className="hero py-10">
            <div className="card flex-shrink-0 w-full max-w-sm">
                <h1 className='text-6xl text-center font-black uppercase'>
                    LogIn Form<br />
                </h1>
                <form className="card-body" onSubmit={handleSubmit(handleLogin)}>

                    <div className='form-control'>
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Email</span>
                        </label>
                        <input {...register("email", {required: "Email is required"})} type="text" placeholder="EMAIL" className="input input-bordered rounded-none" />
                        {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Password</span>
                        </label>
                        <input {...register("password", {required:"Password is required"})} type="password" placeholder="PASSWORD" className="input input-bordered rounded-none" />
                        {errors.password?.type === 'required' && <p className='text-red-700' role="alert">Password is required</p>}
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

export default Login;