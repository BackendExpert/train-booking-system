import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/LoginSignUp/SignUp";
import SignIn from "./components/LoginSignUp/SignIn";
import History from "./components/History/History";
import PrivateRoute from "./components/Security/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import  secureLocalStorage  from  "react-secure-storage";

export default function App() {
  const RoleUser = secureLocalStorage.getItem("loginNew");
  const EmailUser = secureLocalStorage.getItem("logiafter");

  return (
    <BrowserRouter>
      <Routes>


        {/* Login and SignUp */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        
            {/* after login redreact to homepage with login token */}
          {
          (() => {
            if(RoleUser !== null && EmailUser !== null){
              return (
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
              )
            } 
            else{
              return (
                <Route path="/" element={<HomePage />}/>
              )
            }
          })()
        }
        <Route path="/History" element={<History />} />

        {/* These Routes are Protected using PrivateRoute */}

        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}