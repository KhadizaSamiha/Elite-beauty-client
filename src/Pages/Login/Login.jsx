import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
// import SocialLogin from '../Shared/SocialLogin';
import { AiOutlineEye } from 'react-icons/ai';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { signIn, googleSignIn, loading } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => {
                console.log(error);
            })

    }
    console.log(watch("example"));
    return (
        <>
            <Helmet>
                <title>Elite Beauty | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex justify-between relative'>
                                    <input type="text"  {...register("password", { required: true, minLength: 6, maxLength: 12 })} name="password" placeholder="password" className="input input-bordered" />
                                   <button><AiOutlineEye className='absolute right-3 top-4 text-lg'></AiOutlineEye></button>
                                </div>
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must less than 12 character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type='submit' value='login' />
                            </div>
                        </form>
                        <p><small>New Here?</small> <Link to='/signUp'>Create a new account</Link> </p>
                        {/* <div className='text-center'>
                            <SocialLogin></SocialLogin>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;