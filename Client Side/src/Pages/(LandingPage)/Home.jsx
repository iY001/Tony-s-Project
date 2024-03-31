import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import './style.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease', 
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div className='w-[100%] bg-[#f6f6f6]'>
    <Intro/>
    </div>
    <About/>
    </>
  )
}

export default Home