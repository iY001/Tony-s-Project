import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Posts from './Pages/Posts/Posts'
import MainNavbar from '../../components/MainNavbar'
import Details from './Pages/Details/Details'
import MainFooter from '../../components/MainFooter'

function Blog() {
  return (
    <main className='dark:text-white'>
      <MainNavbar />
      <Routes>
        <Route element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>

      <MainFooter />
    </main>
  )
}

export default Blog