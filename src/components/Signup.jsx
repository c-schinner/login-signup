import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = ({setIsSignup}) => {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 min-w-[400px] max-h-[680px]'>
            <h1 className='text-5xl font-semibold'>Sign Up</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Enter your information</p>

        <div className='mt-8'>
            <div className='mt-4 text-lg font-medium flex items-center space-x-2'>
                <label>Email</label>
                <MdEmail />
            </div>
            <div>
                <input className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent' 
                placeholder='Enter your Email' />
            </div>

                <div className='text-lg font-medium flex items-center space-x-2'>
                    <label>Username</label>
                    <FaRegUser />
                </div>
                <div>
                    <input className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your Username' />
                </div>

                <div className='mt-4 text-lg font-medium flex items-center space-x-2'>
                    <label>Password</label>
                    <RiLockPasswordLine />
                </div>
                <div>
                    <input className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent' 
                    placeholder='Enter your Password'
                    type='password' />
                </div>

                <div className='mt-8 flex justify-center'>
                    <button onClick={() => setIsSignup(false)} className='hover:scale-[1.05] font-medium text-base text-violet-500'>
                    Back to Login
                    </button>
                </div>

                <div className='mt-8 flex justify-center'>
                    <button className='active:scale-[.97] inline-block border-2 rounded-md border-blue-500 bg-blue-500 text-white px-3 py-1 text-lg font-semibold'>
                        Sign Up
                    </button>
                </div>

                </div>
        </div>  
    )
}

export default Signup