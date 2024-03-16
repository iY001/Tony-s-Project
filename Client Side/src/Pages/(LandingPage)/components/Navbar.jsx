import React from 'react'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="animate__animated animate__fadeInDown fixed top-0 w-full p-5 bg-white z-50 shadow-lg md:flex md:items-center md:w-[100%] md:justify-between mb-10">
                <div className="flex justify-between items-center  md:w-1/2">
                    <Link to="/" className="animate__fadeInLeft">
                        <h1 className="font-bold uppercase text-4xl text-black"><span className="md:ml-10" style={{ color: '#FD5956' }}>M.</span>tony
                        </h1>
                    </Link>
                    <span className="text-3xl cursor-pointer mx-2 md:hidden block" >
                        {
                            open ? <IoMdClose onClick={() => { setOpen(!open) }} /> : <IoMenu onClick={() => { setOpen(!open) }} />
                        }
                    </span>
                </div>
                <ul className={`${open ? 'top-[80px] opacity-100' : ""}  md:w-1/2 md:flex md:items-center md:justify-end z-[100] md:z-auto md:static absolute bg-white w-full left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#home" className="text-xl link move duration-500 uppercase">Home</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#about" className="text-xl link move duration-500 uppercase">About</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link to="/blog" className="text-xl link move duration-500 uppercase">Blog</Link>
                    </li>
                    <Link  to='/auth/login' className="bg-black uppercase w-28 text-white px-7 py-2 mx-4 w- hover:bg-[#f57573] duration-700 rounded-none">
                        Login
                    </Link>
                </ul>
            </nav>
            <div id='home' class="w-[100%] h-32"></div>

        </>
    )
}

export default Navbar