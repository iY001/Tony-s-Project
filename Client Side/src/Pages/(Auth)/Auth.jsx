import React from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import AuthForms from './AuthForms';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';

const Auth = () => {
  return (
    <Routes>
      <Route element={<Outlet />} >
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/:mode" element={<AuthForms />} />
        <Route path='/forget-password' element={<ForgetPassword />} />    
        <Route path='/reset-password' element={<ResetPassword />} />    
      </Route>
    </Routes>
  );
}

export default Auth;
