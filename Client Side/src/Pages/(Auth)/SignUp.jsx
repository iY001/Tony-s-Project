import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import Swal from 'sweetalert2';
import { CiLock, CiLogin, CiMail } from "react-icons/ci";
import './auth.css'
import PostMethod from '../../functions/PostMethod';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoEyeOutline,IoEyeOffOutline} from "react-icons/io5";


function SignUp() {

  const signUpFormHTML = ReactDOMServer.renderToString(<SignUpForm />);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 flex items-center gap-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          Swal.fire({
            title: 'Sign Up',
            html: signUpFormHTML,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }}>
        Sign Up
        <span className='font-bold text-xl'><CiLogin /></span>
      </button>
    </div>
  );
}

export default SignUp;

// SignUpForm component
export function SignUpForm() {
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
      Navigate('/dashboard')
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
      <p className="p">Already have an account? <a href="/auth/login" className="span">Sign In</a>
      </p><p className="p line">Or With</p>
      <div className="flex-row">
        <button className="btn google">
          <svg xmlSpace="preserve" style={{ enableBackground: 'new 0 0 512 512' }} viewBox="0 0 512 512" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" width={20} version="1.1">
            <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
            c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
            C103.821,274.792,107.225,292.797,113.47,309.408z" style={{ fill: '#FBBB00' }} />
            <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
            c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
            c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{ fill: '#518EF8' }} />
            <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
            c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
            c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{ fill: '#28B446' }} />
            <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
            c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
            C318.115,0,375.068,22.126,419.404,58.936z" style={{ fill: '#F14336' }} />
          </svg>
          Google
        </button>
      </div>
    </form>
  )
}
