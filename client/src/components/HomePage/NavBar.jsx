import React from 'react'
import { Link } from 'react-router-dom'
import MyIcons from '@reacticons/ionicons'

const NavBar = () => {
  return (
    <div className='mb-20'>
        <div className="bg-none text-white mt-[-20px]">
            <div className="flex justify-between mx-16">
                <div className="flex">
                    <MyIcons name='train' size='large' ></MyIcons>
                    <h1 className="my-1">Train Booking</h1>
                </div>
                <div className="my-1">
                    <Link to={'/SignIn'}>
                        <p className="font-semibold duration-500 hover:mr-2">Sign In</p>
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar