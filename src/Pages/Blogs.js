import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=' flex justify-center'>

                <div className='w-[75%] '>
                    <h1 className='text-center text-3xl font-semibold my-3'>Question 1.Difference between Authorization and Authentication?</h1>
                    <table className='border shadow-xl mx-10  '>
                        <td className='border border-l-fuchsia-500'>
                            <th className='border'>Authorization</th>
                            <tr className='border-t-2 text-center'>Authorization determines what resources a user can access.</tr>
                            <tr className='border-t-2 text-center'>Authorization works through settings that are implemented and maintained by the organization.</tr>
                            <tr className='border-t-2 text-center'>Authorization always takes place after authentication.</tr>
                            <tr className='border-t-2 text-center'>Authorization isn't visible to or changeable by the user.</tr>
                            <tr className='border-t-2 text-center '>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</tr>
                        </td>
                        <td className='border border-l-fuchsia-500'>
                            <th className='border'>Authentication</th>
                            <tr className='border-t-2 text-center'>Authentication verifies who the user is.</tr >
                            <tr className='border-t-2 text-center'>Authentication works through passwords,biometric information, and other information provided or entered by the user.</tr>
                            <tr className='border-t-2 text-center'>Authentication is the first step of a good identity and access</tr>
                            <tr className='border-t-2 text-center'>Authentication is visible to and partially changeable by the user.</tr>
                            <tr className='border-t-2 text-center pb-8'>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</tr>
                        </td>
                    </table>
                </div>


            </div>
            <div className=' flex justify-center my-5'>
                <div className='w-[70%] text-center shadow-2xl border-indigo-50 border rounded-md p-2'>
                    <h1 className='text-3xl font-semibold my-3'> Question2: Why are we use Firebase ? What Other Options FireBase Provide?</h1>

                    <p> <span className='text-xl'>Ans:</span> We Use firebase for Authentication and Hosting . collaborative applications by allowing secure access to the database directly from client-side code
                    </p>
                    <p>Other Options are!</p>
                    <ul className='text-lg'>
                        <li>1.App Check</li>
                        <li>2.Fire store DataBase</li>
                        <li>3.Real time DataBase</li>
                        <li>4.Hosting </li>
                        <li>5.Machine Learning </li>
                    </ul>
                </div>
            </div>
            <div className=' flex justify-center my-5' >
                <div className='w-[70%] text-center shadow-2xl border-indigo-50 border rounded-md p-2'>
                    <h1 className='text-3xl font-semibold my-3'>Question3:What other Options do we to implement Authentication?</h1>
                    <ul className='text-lg'>
                        <li>1.PassWord Auth</li>
                        <li> 2.Email List Auth</li>
                        <li>3.Google </li>
                        <li>4.FaceBook</li>
                        <li>5.Git</li>
                        <li>6.Tweeter</li>
                        <li>SAML</li>
                        <li>Phone Number</li>
                        <li>Apple</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Blogs;