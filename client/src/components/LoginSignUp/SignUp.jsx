import React, {useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link } from "react-router-dom";

// https://wallpapercave.com/wp/wp5682561.jpg

const SignUp = () => {
  return (
    <div className='bg-gray-200 py-24'>
        <div className='mx-20'>
            <div className="lg:flex bg-white shadow-md rounded w-full h-auto">
                <div className="">
                    <img src="https://wallpapercave.com/wp/wp12713228.jpg" alt="" className='rounded h-full' />
                </div>
                <div className="mx-5 py-12 px-10 w-full">
                    <form className=''>
                        <div className="my-5">
                            <label htmlFor="">Username : </label>
                            <input type="text" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4' required placeholder='Enter Username'/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4' required placeholder='Enter Email'/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="">Password : </label>
                            <input type="password" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4' required placeholder='Enter Password'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp