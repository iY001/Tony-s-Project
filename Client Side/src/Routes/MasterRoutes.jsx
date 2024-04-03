import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Blog from '../Pages/(Blog)/Blog'
import Dashbaord from '../Pages/(Dashboard)/Dashbaord'
import Home from '../Pages/(LandingPage)/Home'
import Auth from '../Pages/(Auth)/Auth'
import Error401 from '../Pages/Error/Error401'
import Error404 from './../Pages/Error/Error404';
import ScrollToTopOnPageChange from '../components/ScrollToTopOnPageChange'
function MasterRoutes() {
  return (
    <>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path='/' element={<Navigate to="/blog" />} />
        <Route path='/blog/*' element={<Blog />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='/dashboard/*' element={<Dashbaord />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/401' element={<Error401 />} />
        <Route path='/404' element={<Error404 />} />
        <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default MasterRoutes

