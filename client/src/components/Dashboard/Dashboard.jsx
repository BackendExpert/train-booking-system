import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";

const Dashboard = () => {
  const RoleUser = secureLocalStorage.getItem("loginNew");
  const EmailUser = secureLocalStorage.getItem("logiafter");
  const navigate = useNavigate()
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard