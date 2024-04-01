import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Posts from './Pages/Posts/Posts'
import Post from './Pages/Post/Post'

function Blog() {
  return (
    <main className='dark:text-white'>
      <Routes>
        <Route element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='post/:id' element={<Post />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </main>
  )
}

export default Blog