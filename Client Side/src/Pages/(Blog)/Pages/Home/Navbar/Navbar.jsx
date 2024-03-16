import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {

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
        <div className={`navbar lg:items-center xl:justify-evenly   2xl:justify-between xl:my-10 2xl:my-16 md:-left-1 xl:w-full max-lg:dark:bg-[#F4F4F5] lg:static md:absolute md:top-0 w-full flex max-sm:flex-wrap  justify-between   max-sm:gap-2 max-lg:py-4 ${!openMenue ? 'max-lg:shadow-md' : 'max-lg:shadow-none'}  items-center dark:text-black `}>
            <div className="logo  font-semibold max-lg:text-4xl max-lg:items-center max-lg:mx-auto  text-xl max-lg:flex lg:text-3xl">Meta<span className='font-bold'>BLog</span> <div className='max-sm:block hidden w-20'></div>
                <div className='md:absolute md:left-10' onClick={() => toggleMenue()}> {!openMenue ? <IoMdMenu className='text-5xl hidden max-lg:block' /> : <IoMdClose className='text-5xl  hidden max-lg:block' />}
                </div></div>

            <div className={`navLinks max-lg:absolute max-lg:shadow-md max-lg:h-[230px] md:h-[300px] xl:h-auto max-lg:w-full ${openMenue ? 'max-lg:block' : 'max-lg:hidden'} md:z-10 md:-top-[58px] max-lg:-top-2 duration-200 max-lg:dark:bg-[#F4F4F5]  max-lg:text-left max-lg:translate-y-[130px]`}>
                <ul className={`flex hover:text-black max-lg:text-3xl max-sm:text-xl 2xl:gap-20 xl:gap-5 gap-4 lg:text-xl text-[#3B3C4A] max-lg:justify-between max-lg:flex max-lg:flex-col max-lg:my-5 max-lg:mx-10 `} >{NavLinks.map((link, i) => (<li key={i}>{link.pageName}</li>))}</ul>
            </div>

            <div className="search-mood flex max-sm:w-full justify-between gap-8 items-center ">
                <div className="search max-sm:w-4/5 md:w-full max-lg:mx-auto md:mr-5  max-lg:justify-between  flex items-center bg-[#3B3B3B] focus:outline p-2 rounded-md max-lg:dark:bg-white lg:dark:bg-[#F4F4F5]">
                    <input type="text" placeholder='Search' className='text-white md:w-[300px] dark:text-[#3B3C4A] md:text-2xl   placeholder-[#3B3C4A] dark:border-none border border-r-0 outline-none bg-[#3b3b3b] max-lg:dark:bg-white lg:dark:bg-[#F4F4F5]' />
                    <TfiSearch className='dark:border-none border w-2/12   border-l-0 text-xl dark:text-[#3B3C4A] box-content ' />
                </div>
                <div className="mood text-xl max-lg:hidden">
                    <MdLightMode className='dark:shadow-2xl dark:bg-[#F4F4F5] p-1 box-content rounded-full  ' />
                    <MdDarkMode className='hidden' />
                </div>
            </div>
        </div>
    )
}

export default Navbar