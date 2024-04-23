import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";

const Dashboard = () => {
  const RoleUser = secureLocalStorage.getItem("loginNew");
  const EmailUser = secureLocalStorage.getItem("logiafter");
  const navigate = useNavigate()

  const [sideOpen, SetsideOpen] = useState();

  return (
    <div className="bg-gray-200 py-4 px-3">
      <div className="bg-white py-4 px-2">
        Dashbord
      </div>
    </div>
  )
}

export default Dashboard