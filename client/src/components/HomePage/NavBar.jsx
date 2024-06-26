import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyIcons from '@reacticons/ionicons'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";


const NavBar = () => {
    const RoleUser = secureLocalStorage.getItem("loginNew");
    const EmailUser = secureLocalStorage.getItem("logiafter");
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    } 
  return (
    <div className='mb-20'>
        <div className="bg-none text-white mt-[-20px]">
            <div className="flex justify-between mx-16">
                <div className="flex">
                    <MyIcons name='train' size='large' ></MyIcons>
                    <h1 className="my-1">Train Booking</h1>
                </div>
                <div className="my-1">                   
                    <div className="">                        
                        {
                        (() => {
                            if(RoleUser !== null && EmailUser !== null){
                                return (
                                    <div className="flex">
                                        <p className="mx-2">{EmailUser}</p>
                                        <p className="font-semibold duration-500 hover:mr-2 cursor-pointer" onClick={logout}>Logout</p>
                                    </div>
                                    
                                )
                            }
                            else{
                                return (
                                    <Link to={'/SignIn'}>
                                        <p className="font-semibold duration-500 hover:mr-2" >Sign IN</p>
                                    </Link>
                                )
                            }
                        })()
                    }
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar