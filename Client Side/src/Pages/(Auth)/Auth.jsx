import React from 'react';
import { useParams } from 'react-router-dom';
import  { LoginForm } from './Login';
import  { SignUpForm } from './SignUp';

const Auth = () => {
  const {mode} = useParams();

  return (
    <section className='w-full h-[100vh] flex items-center '>
    
    <div className='w-[50%] h-full flex items-center justify-center'>
    {
      mode === 'login' ? <LoginForm/> : <SignUpForm/>
    }
    </div>

    <div className='w-[50%] h-full bg-slate-900 flex items-start '>
      
    </div>
    </section>
  );
}

export default Auth;
