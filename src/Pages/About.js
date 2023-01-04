import React from 'react';
import profile from '../img/shape-9.png'
const About = () => {
    return (
        <div className='bg-slate-800'>
            <div className='flex items-center'>
                <img className='w-[40%] h-[75%]' src={profile} alt="" />
                <div className='text-white name'>
                    <h2 data-text='&nbsp;Soumen Baral Shuvo &nbsp;' className='  text-center '>&nbsp;Soumen Baral Shuvo &nbsp; </h2>
                </div>
            </div>
        </div>
    );
};

export default About;