import React from 'react';
import CustomLink from './CustomLink'
import logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../firebase.ini';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <div className='md:flex justify-between bg-slate-200 '>
            <div onClick={() => navigate('/')} className='md:ml-14'>
                <img src={logo} alt="" />
            </div>
            <div className='md:flex  items-center gap-6 md:text-2xl md:font-semibold'>
                <CustomLink to={'/services'}>Services</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                {user ? <CustomLink onClick={() => signOut()}>SignOut</CustomLink> : <CustomLink to={'/login'}>Login</CustomLink>}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;