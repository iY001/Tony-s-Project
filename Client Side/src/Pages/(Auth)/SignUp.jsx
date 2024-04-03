import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import Swal from 'sweetalert2';
import { CiLock, CiLogin, CiMail } from "react-icons/ci";
import './auth.css'
import PostMethod from '../../functions/PostMethod';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoEyeOutline,IoEyeOffOutline} from "react-icons/io5";


// SignUpForm component
export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await PostMethod('/user/auth/signup', { name, email, password })
    if (response?.status == 200 || response?.status == 201) {
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('user', JSON.stringify(response.data.user))
      if (response.data.user.role === 'admin') {
        Navigate('/dashboard')
      }else{
        Navigate('/blog')
      }
    }
    setLoading(false);
  }





  return (
    <form onSubmit={handleSignUp} className="form">
      <div className="flex-column text-start">
        <label>Name</label>
      </div>
      <div className="inputForm">
        <div className='font-bold text-black text-xl'><CiLock /></div>
        <input placeholder="Enter your Name" className="inputS" type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex-column text-start">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <div className='font-bold text-black text-xl'><CiMail /></div>
        <input placeholder="Enter your Email" className="inputS" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex-column text-start">
        <label>Password</label>
      </div>
      <div className="inputForm">
        <div className='font-bold text-black text-xl'><CiLock /></div>
        <input placeholder="Enter your Password" className="inputS" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
        <div className='font-bold text-black text-xl cursor-pointer mr-1' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}</div>
        
      </div>
      <button className="button-submit " disabled={loading}> {loading ? 'Loading...' : 'Sign Up'}</button>
      <p className="p">Already have an account? <a href="/auth/signin" className="span">Sign In</a></p>
    </form>
  )
}
