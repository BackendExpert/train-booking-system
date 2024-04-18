import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/LoginSignUp/SignUp";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        {/* Login and SignUp */}
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}