import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import GetMethod from '../../functions/GetMethod';
import ShowAlert from '../../functions/Swal/ShowAlert';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    if (!email) {
      setLoading(false);
      ShowAlert('error', 'Error', 'Please enter your email');
      return;      
    }
    const EmailWithout = email
    const response = await GetMethod(`/user/auth/forgetpassword?email=${EmailWithout}`);
    
    if (response?.status == 200 || response?.status == 201) {
      setIsEmailSent(true);
      ShowAlert('success', 'Success', 'Password reset sent to your email.');
    }
    setLoading(false);
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
          />
        </div>
        {isEmailSent ? (
          <div className="flex flex-col items-center mb-4">
            <p className="text-green-500">Password reset instructions have been sent to your email.</p>
            <Link to="https://mail.google.com" className="button-submit disabled  flex items-center justify-center" >Check Your Email</Link>
          </div>
        ) : (
          <div className="flex items-center mb-4">
            <button
              className={`button-submit ${loading ? 'disabled' : ''}`}
              onClick={handleResetPassword}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Reset Password'}
            </button>
          </div>
        )}
      </form>

      <img className='absolute bottom-0 w-full fill-slate-300 z-[-1]' src="/assets/wave.svg" alt="" />
    </section>
  );
}

export default ForgetPassword;
