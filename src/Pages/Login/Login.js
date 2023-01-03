import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.ini';
import Loading from './Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }
    let err;
    if (error) {
        err = error.message
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='flex justify-center '>
            <div className='w-1/2'>
                <h1 className='text-center text-2xl font-semibold text-blue-700'>Login Here</h1>
                <form onSubmit={handleSubmit} action="" className=' p-7'>
                    <div>
                        <label htmlFor="email" className='block text-xl'>Email</label>
                        <input className='w-full p-2 h-10 text-xl border rounded-sm' type="email" name="email" id="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="email" className='block text-xl'>Password</label>
                        <input className='w-full text-xl p-2 h-10  border' type="password" name="password" id="password" placeholder='Enter Your Password' />
                    </div>
                    <p className='text-red-600'> {err}</p>
                    <div className='py-2'>
                        <input type="checkbox" name="check" id="check" />
                        <label className='pl-2' htmlFor="">Remember me</label>
                        <p>Forget Yor password?</p>

                    </div>
                    <div className='md:flex justify-between'>
                        <h1>New to Read Onion? <Link to={'/signUp'} className='text-orange-400 font-semibold md:inline block'> SingUp Here</Link> </h1>
                        <input className='bg-green-500 text-xl cursor-pointer font-semibold px-5 rounded-xl hover:bg-green-400 mt-3 hover:shadow-sm py-2' type="submit" value="LOG IN" />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;