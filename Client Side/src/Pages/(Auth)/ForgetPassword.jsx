import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = () => {
    setLoading(true);
    // Simulating a 2-second delay
    setTimeout(() => {
      setLoading(false);
      setIsEmailSent(true);
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
