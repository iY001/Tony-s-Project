import React from 'react'
import video from '../assets/Video.mp4'
function About() {
  return (
    <>
      <div id='about' class="w-[100%] h-32"></div>
      <div className='w-[80%] mx-auto py-5 h-auto'>
        <div className='w-full flex flex-col justify-center items-center '>
            <h1 className='text-6xl lg:text-7xl font-bold uppercase'>About me<span className='text-[#f57573]'>.</span></h1>
            <p className=' w-[75%] mt-3 text-center  md:text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid et explicabo excepturi! Quaerat illo sunt asperiores tempore perferendis provident aliquid earum velit magni veritatis, sapiente nesciunt! Dolore quasi dicta molestiae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
            <video src={video} controls className='mt-3 w-[80%] mx-auto py-10'></video>
        </div>
    </div>
    </>
  )
}

export default About