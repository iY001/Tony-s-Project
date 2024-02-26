import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../Pages/(Blog)/Blog'
import Dashbaord from '../Pages/(Dashboard)/Dashbaord'
import Home from '../Pages/(LandingPage)/Home'
function MasterRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/*' element={<Blog/>}/>
      <Route path='/dashboard' element={<Dashbaord/>}/>
      <Route path='/*' element={<h1>Page Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default MasterRoutes