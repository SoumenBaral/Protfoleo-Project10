import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Footer.css'
const Footer = () => {
    return (
        <div className='Footer bg-blue-600'>
            <div className='waves'>
                <div className="Wave" id='wave-1'></div>
                <div className="Wave" id='wave-2'></div>
                <div className="Wave" id='wave-3'></div>
                <div className="Wave" id='wave-4'></div>
            </div>
            <ul className='social-icon gap-2 '>
                <li><Link ><ion-icon name="logo-facebook"></ion-icon></Link></li>
                <li><Link><ion-icon name="logo-twitter"></ion-icon></Link></li>
                <li><Link><ion-icon name="logo-linkedin"></ion-icon></Link></li>
                <li><Link><ion-icon name="logo-github"></ion-icon></Link></li>
            </ul>
            <ul className='menu gap-2'>
                <li><CustomLink to={'/blogs'}>Blogs</CustomLink> </li>
                <li> <CustomLink to={'/services'}>Services</CustomLink></li>
                <li>  <CustomLink to={'/login'}>Login</CustomLink></li>
                <li><CustomLink to={'/about'}>About</CustomLink></li>
            </ul>
            <p><ion-icon name="logo-react"></ion-icon>2023</p>
        </div>
    );
};

export default Footer;