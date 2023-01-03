import React from 'react';
import profile from '../../img/Soumen.jpg'
import Footer from "../Shared/Footer/Footer";
import './Home.css'
const Home = () => {
    return (
        <div  >
            <div className='flex items-center bg-img-container '>
                <div>
                    <img className='w-[80%] h-[80%] border rounded-full' src={profile} alt="" />
                </div>
                <div className='text-white name'>
                    <h1 className='md:text-3xl  text-lg font-bold  text-center'>I Am a MERN Stuck Web Developer</h1>
                    <h2 data-text='&nbsp;Soumen Baral Shuvo &nbsp;' className='  text-center '>&nbsp;Soumen Baral Shuvo &nbsp; </h2>
                    <p className='font-semibold text-xs text-center'>I am very professional Web Developer .I am Born for add funtionality . I wark as a web Developer more then 3 Month . You can appionment me as web Developer</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;