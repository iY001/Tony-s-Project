import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdMenu, IoMdClose } from 'react-icons/io';


function Home() {
  const NavLinks = [
    { pageName: 'Home', href: '/', },
    { pageName: 'Blog', href: '/', },
    { pageName: 'Single Post', href: '/', },
    { pageName: 'Pages', href: '/', },
    { pageName: 'Contact', href: '/', },
  ]
  const [openMenue, setOpenMenue] = useState(false);
  const toggleMenue = () => {
    setOpenMenue(!openMenue)
  }
  return (
    <div className='lg:w-9/12 w-full mx-auto dark:bg-[#181A2A] bg-white'>
      <div className='container bg-white  '>


        <div className={`navbar  max-sm:dark:bg-[#F4F4F5]  w-full flex max-sm:flex-wrap  justify-between  max-sm:gap-2 max-sm:py-4 ${!openMenue?'max-sm:shadow-md':'max-sm:shadow-none'}   lg:my-8 items-center dark:text-black `}>
          <div className="logo  font-semibold max-sm:text-4xl max-sm:items-center max-sm:mx-auto  text-xl max-sm:flex lg:text-3xl">Meta<span className='font-bold'>BLog</span> <div className='max-sm:block hidden w-20'></div>  
          <div onClick={() => toggleMenue()}> {!openMenue ? <IoMdMenu className='text-5xl hidden max-sm:block' /> : <IoMdClose className='text-5xl hidden max-sm:block' />} 
          </div></div>

          <div className={`navLinks max-sm:absolute max-sm:shadow-md max-sm:h-[230px]  max-sm:w-full ${openMenue?'max-sm:block':'max-sm:hidden'} max-sm:-z-10  max-sm:-top-1 duration-200 max-sm:dark:bg-[#F4F4F5]  max-sm:text-left max-sm:translate-y-[130px]`}>
            <ul className={`lg:flex  max-sm:text-xl  gap-4 lg:text-xl text-[#3B3C4A] max-sm:justify-between max-sm:flex max-sm:flex-col max-sm:m-5 `} >{NavLinks.map((link, i) => (<li key={i} >{link.pageName}</li>))}</ul>
          </div>

          <div className="search-mood flex max-sm:w-full justify-between gap-8 items-center ">
            <div className="search max-sm:w-4/5 max-sm:mx-auto max-sm:justify-between  flex items-center bg-[#3B3B3B] focus:outline p-2 rounded-md max-sm:dark:bg-white lg:dark:bg-[#F4F4F5]">
              <input type="text" placeholder='Search' className='text-white max-sm:w-10/12 dark:text-[#3B3C4A]   placeholder-[#3B3C4A] dark:border-none border border-r-0 outline-none bg-[#3b3b3b] max-sm:dark:bg-white lg:dark:bg-[#F4F4F5]' />
              <TfiSearch className='dark:border-none border w-2/12  border-l-0 text-xl dark:text-[#3B3C4A]  box-content ' />
            </div>
            <div className="mood text-xl max-sm:hidden">
              <MdLightMode className='dark:shadow-2xl dark:bg-[#F4F4F5] p-1 box-content rounded-full  ' />
              <MdDarkMode className='hidden' />
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}

export default Home