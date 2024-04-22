import React, {useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage"

// https://wallpapercave.com/wp/wp5682561.jpg

const SignUp = () => {
    const navigate = useNavigate()

    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    const headleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/SignIn', LoginData)
        .then(res => {
            const LoginToken = res.data.token
            localStorage.setItem('Logintoken', LoginToken);
            console.log('Login Successful');
    
            const userRole = res.data.CheckRole[0].role;
            const userEmail = res.data.CheckRole[0].email;
    
            secureLocalStorage.setItem("loginNew", userRole);
            secureLocalStorage.setItem("logiafter", userEmail);
    
            if(res.data.Msg === "success"){
                if(res.data.CheckRole[0].is_active === 0 && res.data.CheckRole[0].is_lock === 1){
                    alert('Your Account has been Locked. unauthorized activity has been detected.')
                    localStorage.clear();
                    console.log('Unauthorized Access. Logedout...');
                    navigate('/SignIn');
                }
                else if(res.data.CheckRole[0].is_active === 0){
                    alert('Your Account is Deactivated')
                    localStorage.clear();
                    console.log('Logedout...');
                    navigate('/SignIn');
                }
                else if(res.data.CheckRole[0].role === 'Member'){
                    navigate('/DirectorDash');
                }
                else if(res.data.CheckRole[0].role === 'Secretary'){
                    navigate('/Secretary');
                }
                else if(res.data.CheckRole[0].role === 'SuperAdmin'){
                    navigate('/superAdmin');
                }
                else if(res.data.CheckRole[0].role === "Admin"){
                    navigate('/admin');
                }
                else if(res.data.CheckRole[0].role === "HOD"){
                    navigate('/hod');
                }
                else if(res.data.CheckRole[0].role === "TO"){
                    navigate('/to');
                }
                else if(res.data.CheckRole[0].role === "Librarian"){
                    navigate('/librarian');
                }
                else if(res.data.CheckRole[0].role === "Labmanager"){
                    navigate('/labManager');
                }
                else if(res.data.CheckRole[0].role === "Accountant"){
                    navigate('/accountant');
                }
                else if(res.data.CheckRole[0].role === "User"){
                    navigate('/user');                    
                }
                else if(res.data.CheckRole[0].role === "Scientist"){
                    navigate('/ScientistsDash');
                }
                else if(res.data.CheckRole[0].role === "RA"){
                    navigate('/RADash');
                }
                else if(res.data.CheckRole[0].role === "NonAcademic"){
                    navigate('/NonAcademic');
                }
                else if(res.data.CheckRole[0].role === "PDFellow"){
                    navigate('/PDFellow');
                }
                else if(res.data.CheckRole[0].role === "Driver"){
                    navigate('/DriverDash');
                }
                else{
                    alert("ERROR");
                }
           }
        })





    }

  return (
    <div className='bg-gray-200 py-24'>
        <div className='lg:mx-20 mx-8'>
            <Link to={'/'}>
                <div className='mb-1 mx-4 flex duration-500 hover:mx-2'>
                    <span className='mt-[1px] mx-2'><MyIcons name='arrow-back'></MyIcons></span>
                    <p className="">Back to Home</p>
                </div>
            </Link>
            <div className="lg:flex bg-white shadow-md rounded w-full h-auto">
            <div className="lg:mx-5 mx-0 py-12 px-10 w-full">
                    <form onSubmit={headleSubmit}>
                        <div className="my-5">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4 shadow-md' required placeholder='Enter Email'
                            onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="">Password : </label>
                            <input type="password" name="" id="" className='w-full border border-gray-300 my-2 h-12 rounded pl-4 shadow-md' required placeholder='Enter Password'
                            onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
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