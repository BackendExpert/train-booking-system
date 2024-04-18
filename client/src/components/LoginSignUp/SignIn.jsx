import React, {useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link } from "react-router-dom";

// https://wallpapercave.com/wp/wp5682561.jpg

const SignUp = () => {
  return (
    <div className='bg-gray-200 py-24'>
        <div className='lg:mx-20 mx-8'>
            <div className="lg:flex bg-white shadow-md rounded w-full h-auto">
            <div className="lg:mx-5 mx-0 py-12 px-10 w-full">
                    <form className=''>
                        <div className="my-5">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4' required placeholder='Enter Email'/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="">Password : </label>
                            <input type="password" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4' required placeholder='Enter Password'/>
                        </div>
                        <div className="">
                            <button type='submit' className='w-full bg-blue-500 rounded py-4 px-8 text-white duration-500 hover:bg-blue-600 hover:shadow-md'>SignIn</button>
                        </div>
                    </form>
                    <p>Don't have an Account ? <Link to={'/SignUp'}><span className='text-blue-500'>SignUp</span></Link></p>
                </div>
                <div className='lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp12713228.jpg)] bg-center bg-cover h-auto w-full'>
                    <div className="text-white font-semibold text-3xl text-center my-16">Welcome Back</div>                    
                </div>
            </div>
            <div className="my-1 text-center">
                &copy; Developed and Design by : JehanKandy
            </div>
        </div>
    </div>
  )
}

export default SignUp