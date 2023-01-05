import React, { useContext, useState } from 'react';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle("Login")
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const {err, setErr} = useState(' ');
    const navigate = useNavigate();

    const handleLogin = data => {
        console.log(data);
        console.log(errors);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            setErr(error.message);
        });
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
                        <input {...register("email", {required: "Email is required"})} type="email" placeholder="EMAIL" className="input input-bordered rounded-none" />
                        {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className='font-semibold text-sm tracking-wider uppercase'>Password</span>
                        </label>
                        <input {...register("password", {required:"Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer'}
                    })} type="password" placeholder="PASSWORD" className="input input-bordered rounded-none" />
                        {errors.password?.type === 'required' && <p className='text-red-700' role="alert">Password is required</p>}
                    </div>
                    <p>Don't have an account <Link to="/register" className="text-secondary underline">Please Register</Link></p>
                    <input className='btn colorGray rounded-none bg-colorYellow bg-colorYellowDk' type="submit" />
                    <div>
                        { err && <p>{err}</p>}
                    </div>
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