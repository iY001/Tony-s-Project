import React, { useState } from 'react';
import './auth.css'
import { CiLock, CiLogin, CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import PostMethod from '../../functions/PostMethod';
import Cookies from 'universal-cookie';

// LoginForm component
export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const cookies = new Cookies(null, { path: '/' });

  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await PostMethod('/user/auth/signin', { email, password })

    if (response?.status == 200 || response?.status == 201) {
      cookies.set('token', response?.data?.token, { path: '/' })
      localStorage.setItem('user', JSON.stringify(response.data.user))
      if (response.data.user.role === 'admin') {
        Navigate('/dashboard')
      } else {
        Navigate('/blog')
      }
    }
    setLoading(false);
  }




  return (
    <form onSubmit={handleLogin} className="form">
      <div className="flex-column text-start">
        <label>Email </label>
      </div>
      <div className="inputForm">
        <div className='font-bold text-black text-xl'><CiMail /></div>
        <input placeholder="Enter your Email" className="inputS" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex-column text-start">
        <label>Password </label>
      </div>
      <div className="inputForm">
        <div className='font-bold text-black text-xl'><CiLock /></div>
        <input placeholder="Enter your Password" className="inputS" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
        <div className='font-bold text-black text-xl cursor-pointer mr-1' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}</div>

      </div>
      <div className="flex-row">
        <a href="/auth/forget-password" className="span">Forgot password?</a>
      </div>
      <button className="button-submit" onClick={() => setLoading(true)}>{loading ? 'Loading...' : 'Sign In'}</button>
      <p className="p">Don't have an account? <a href="/auth/signup" className="span">Sign Up</a></p>
    </form>
  )
}
