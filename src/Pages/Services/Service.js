import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { picture, name, about } = service
    const navigate = useNavigate()
    return (
        <div className='border border-fuchsia-300 shadow-inner relative'>

            <div className='flex justify-center mt-2' >
                <img className='w-[75%] ' src={picture} alt="" />
            </div>
            <h1 className='text-center text-xl'>{name}</h1>
            <p className='m-2'>{about}</p>
            <div className='flex justify-end mr-4 p-2'>
                <button onClick={() => navigate('/')} className='bg-blue-800 text-white border border-fuchsia-300 px-2 md:px-4 md:py-2 rounded shadow-xl hover:bg-blue-700'>CheckOut</button>
            </div>
        </div>
    );
};

export default Service;