import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
<<<<<<< HEAD
import LatestPosts from './posts/latestBlogs';
=======
import LatestPosts from './posts/LatestPosts';
import MainNavbar from '../../../../components/MainNavbar';
>>>>>>> 4b685bf843450d3fd38a013459ee7ef1626568c8


function Home() {

  return (
    <>
      
        {/* <Navbar /> */}
        <MainNavbar />
        <Hero />
        <LatestPosts/>
      

    </>
  )
}

export default Home