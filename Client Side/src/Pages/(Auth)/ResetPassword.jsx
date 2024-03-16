import React, { useEffect, useState } from 'react';
import { CiMail, CiLock } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(() => {
    if (searchParams.get('email') ) {
      setEmail(searchParams.get('email'));
    }
  }, [])

  const handleResetPassword = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section className='w-full h-[100vh] flex items-center justify-center '>
      <form className="form">
        <div className="flex-column text-start">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <CiMail className="font-bold text-black text-xl" />
          <input
            placeholder="Enter your Email"
            className="inputS"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            defaultValue={email}
            disabled
          />
        </div>
        {/* input for password */}
        <div className="flex-column text-start">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <CiLock className="font-bold text-black text-xl" />
          <input
            placeholder="Enter your Password"
            className="inputS"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            defaultValue={password}
          />
          
        <div className='font-bold text-black text-xl cursor-pointer mr-1' onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}</div>
        </div>

        {/* input for confirm password */}
        <div className="flex-column text-start">
          <label>Confirm Password</label>
        </div>
        <div className="inputForm">
          <CiLock className="font-bold text-black text-xl" />
          <input
            placeholder="Enter your Password"
            className="inputS"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
            defaultValue={confirmPassword}
          />
          
        <div className='font-bold text-black text-xl cursor-pointer mr-1' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword? <IoEyeOutline /> : <IoEyeOffOutline />}</div>
        </div>


        <div className="flex items-center mb-4">
          <button
            className={`button-submit ${loading ? 'disabled' : ''}`}
            onClick={handleResetPassword}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Reset Password'}
          </button>
        </div>
      </form>

      <img className='absolute bottom-0 w-full fill-slate-300 z-[-1]' src="/assets/wave.svg" alt="" />
    </section>
  );
}

export default ResetPassword;
