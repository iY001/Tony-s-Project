import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import LatestPosts from './posts/LatestPosts';


function Home() {

  return (
    <>
      <div className="container lg:w-4/5 mx-auto">
        <Navbar />
        <Hero />
        <LatestPosts/>
      </div>

    </>
  )
}

export default Home