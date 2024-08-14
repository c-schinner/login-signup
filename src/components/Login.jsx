import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ({setIsSignup}) => {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Enter your information</p>
            <div className='mt-8'>
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

                    <div>
                        <input 
                        type='checkbox'
                        id='remember'
                        className='mr-2 mt-8 mb-4' />
                        <label 
                        for='remember'
                        className='font-medium text-base'>
                            Remember Username
                            </label>
                    </div>

                <div className='mt-8 flex items-center justify-between'>
                    <button className='hover:scale-[1.05] font-medium text-base text-violet-500'>
                        Forgot password?
                    </button>
                    <button 
                    onClick={() => setIsSignup(true)}
                    className='hover:scale-[1.05] font-medium text-base text-blue-500'>
                        Register
                    </button>
                </div>
                <div className='mt-8 flex justify-center'>
                    <button className='active:scale-[.97] inline-block border-2 rounded-md border-blue-500 bg-blue-500 text-white px-3 py-1 text-lg font-semibold'>
                        Sign in
                    </button>
                </div>
            </div>     
        </div>
    )
}

export default Login