import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import LatestPosts from './posts/LatestPosts';
import MainNavbar from '../../../../components/MainNavbar';


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