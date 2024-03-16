import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';


function Home() {

  return (
    <>
    <div className="container lg:w-4/5 mx-auto">
         <Navbar />
      <Hero/>
    </div>
   
    </>
  )
}

export default Home