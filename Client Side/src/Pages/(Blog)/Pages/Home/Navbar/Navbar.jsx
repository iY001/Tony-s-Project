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


        <div className="navbar  w-full xl:w-4/5 xl:mx-auto py-5  xl:bg-white bg-[#F4F4F5]">
            <div className='xl:w-full w-4/5 flex flex-col xl:flex-row xl:items-center xl:justify-between mx-auto gap-2'>
                <div className="logo flex items-center justify-between text-5xl"><div className="">Meta<span className='font-bold'>BLog</span></div> <div className='max-sm:block hidden w-20 '></div>
                    <div className='' onClick={() => toggleMenue()}> {!openMenue ? <IoMdMenu className='block xl:hidden' /> : <IoMdClose className='block xl:hidden' />}
                    </div>
                </div>

                <div className={`navLinks absolute xl:static w-full xl:bg-white  p-5 bg-[#F4f3f5] ${openMenue ? 'block' : 'hidden'} xl:block top-[136px] left-0`}>
                    <ul className={`flex flex-col  xl:flex-row gap-4 justify-center  xl:gap-10 xl:text-2xl text-xl`} >{NavLinks.map((link, i) => (<li className='cursor-pointer '  key={i}>{link.pageName}</li>))}</ul>
                </div>


                <div className="search-mood">
                    <div className="search  flex items-center justify-between text-3xl lg:text-2xl  border-solid  border-black border-2 rounded-md ">
                        <input type="text" placeholder='Search' className='outline-0 w-5/6 xl:w-auto' />
                        <TfiSearch className='mx-auto xl:px-1 cursor-pointer' />
                    </div>
                    <div className="mood">
                        <MdLightMode className='hidden' />
                    </div>
                </div>
            </div>



        </div>






    )
}

export default Navbar