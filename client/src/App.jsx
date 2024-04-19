import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/LoginSignUp/SignUp";
import SignIn from "./components/LoginSignUp/SignIn";
import History from "./components/History/History";
import PrivateRoute from "./components/Security/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        {/* Login and SignUp */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* 
            after login redreact to homepage with login token
          {
          (() => {
            if()
          })()
        } */}
        <Route path="/History" element={<History />} />

        {/* These Routes are Protected using PrivateRoute */}

        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}