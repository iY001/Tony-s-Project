import React from 'react';

import { useParams } from 'react-router-dom';
import { LoginForm } from './SignIn';
import { SignUpForm } from './SignUp';

const AuthForms = () => {
  const { mode } = useParams();

  return (
    <section className='w-full h-[100vh] flex items-center justify-center '>

      <div className='w-[50%] h-full flex  flex-col items-center justify-center'>
        {
          mode === 'login' ? <h1 className='text-3xl '>Sign In</h1> : <h1 className='text-3xl  '>Sign Up</h1>
        }
        {
          mode === 'login' ? <LoginForm /> : <SignUpForm />
        }
      </div>



      <div className='w-[50%] h-full bg-[#facea8] lg:flex flex-col items-center justify-center gap-4 hidden '>
        {
          mode === 'login' ? <h1 className='text-5xl font-bold text-white'>Welcome Back</h1> : <h1 className='text-5xl font-bold text-white'>Create Your Account</h1>
        }

        <img className='w-[50%] drop-shadow-2xl' src="/assets/undraw_login.svg" alt="" />

      </div>
    </section>
  )
}

export default AuthForms;
