import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";
import MyIcons from '@reacticons/ionicons'

const Dashboard = () => {
  const RoleUser = secureLocalStorage.getItem("loginNew");
  const EmailUser = secureLocalStorage.getItem("logiafter");
  const navigate = useNavigate()

  const [sideOpen, SetsideOpen] = useState();

  const allUserSide = [
    {id: 1, name: "Vehicles", link: "/Vehicles", icon: <MyIcons name="car" size="large"></MyIcons>},
    {id: 2, name: "Rented Vehicle", link: "#", icon: <MyIcons name="car-sport" size="large"></MyIcons>},
    {id: 3, name: "Own Vehicle ", link: "#", icon: <MyIcons name="car" size="large"></MyIcons>},
    {id: 4, name: "Profile", link: "#", icon: <MyIcons name="person" size="large"></MyIcons>},
    {id: 5, name: "Users", link: "#", icon: <MyIcons name="people" size="large"></MyIcons>},
    {id: 6, name: "Requests", link: "#", icon: <MyIcons name="help-circle" size="large"></MyIcons>},
    {id: 7, name: "Report", link: "#", icon: <MyIcons name="document-text" size="large"></MyIcons>},
    {id: 8, name: "Suspended", link: "#", icon: <MyIcons name="person-circle" size="large"></MyIcons>},        
]


  return (
    <div className="bg-gray-200 py-4 px-3 h-auto w-full">
      <div className="flex">
        <div className={`duration-500 relative border-r-4 border-blue-300 shadow-xl my-1 mx-2 rounded bg-white h-auto pl-4 py-4 ${sideOpen ? "w-64" : "w-20" }`}>
          <div className="flex">
              <div className="text-[#3B71CA] pt-1" onClick={() => SetsideOpen(!sideOpen)}>{sideOpen ? <MyIcons size="large" name="close"></MyIcons> : <MyIcons size="large" name="menu"></MyIcons>}</div>
              {/* <div className={`text-2xl pb-4 text-[#3B71CA] font-bold ${!sideOpen && 'scale-0'}`}>SuperAdmin</div>                     */}
          </div>
          <div className="">
              {sideOpen ? <div>
                  <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className="px-6"/>
              </div> : <div></div>}
          </div>
          <div className={`pl-2 text-xl text-gray-400 duration-500 hover:text-[#3B71CA]`}>
              <Link to={'/Dashboard'}>
                  {sideOpen ? <div className="flex pl-2 pt-2">
                      {
                          (() => {
                              if(RoleUser === "member"){
                                  return (
                                      <p className="">SuperAdmin</p>
                                  )                            
                              }
                          })()
                      }
                                    
                      </div> : <MyIcons name="speedometer"></MyIcons> }
                  </Link>
              </div>
              <hr className="mt-2 mr-4 border-b-1 border-blue-300"/>
    
                        
              <div className="">
                  {
                      allUserSide.map((sidem) => {
                          if(RoleUser === "SuperAdmin" || RoleUser === "SuperAdmin"){
                              return (
                                  <Link to={sidem.link}>
                                      <div className="flex py-2 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                          <p>{sidem.icon}</p>
                                          <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                      </div>
                                  </Link>
                              )
                          }
                          if(RoleUser === "renter"){
                              if(sidem.id === 1 || sidem.id === 2 || sidem.id === 3 || sidem.id === 4){
                                  return (
                                      <Link to={sidem.link}>
                                          <div className="flex py-2 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                              <p>{sidem.icon}</p>
                                              <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                          </div>
                                      </Link>
                                  )
                              }
                          }
                          if(RoleUser === "buyer"){
                              if(sidem.id === 1 || sidem.id === 2 || sidem.id === 4){
                                  return (
                                      <Link to={sidem.link}>
                                          <div className="flex py-2 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                              <p>{sidem.icon}</p>
                                              <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{sidem.name}</p>                        
                                          </div>
                                      </Link>
                                  )
                              }
                          }
                      })
                  }
              </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard