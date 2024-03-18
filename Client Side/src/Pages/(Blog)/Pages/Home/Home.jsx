import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import LatestPosts from './posts/LatestPosts';


function Home() {

  return (
    <>
      
        <Navbar />
        <Hero />
        <LatestPosts/>
      

    </>
  )
}

export default Home