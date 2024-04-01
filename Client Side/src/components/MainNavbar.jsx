import React from 'react'
import Login from '../Pages/(Auth)/SignIn'
import { Link } from 'react-router-dom'
import { PiSignIn } from "react-icons/pi";
import { IoFileTrayStackedOutline, IoHomeOutline, IoMenuOutline, IoPersonOutline } from 'react-icons/io5';
export default function MainNavbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className="bg-white h-16 px-2 sm:px-4 py-2.5 dark:bg-slate-800 fixed w-full z-20 top-0 left-0 drop-shadow-md border-gray-200  flex items-center justify-between ">

      <div className='md:hidden text-3xl cursor-pointer hover:translate-x-2 transition-all' onClick={() => setOpen(!open)}><IoMenuOutline /></div>

      <section>
        <h1 className='text-3xl font-bold'><Link to="/">TONY</Link></h1>
      </section>

      <section className={`md:flex items-center gap-4 hidden`}>
        <Link to="/" className=' flex items-center gap-1 move  p-1 px-3 rounded transition-all text-xl'><IoPersonOutline />PORTFOLIO</Link>
        <Link to="/blog" className=' flex items-center gap-1 move p-1 px-3 rounded transition-all text-lg'><IoHomeOutline />BLOG</Link>
        <Link to="/posts" className=' flex items-center gap-1 move p-1 px-3 rounded transition-all text-lg'><IoFileTrayStackedOutline />POSTS</Link>
      </section>

      {
        open &&
        <div className='absolute left-0 top-0 h-screen w-[40%] bg-white dark:bg-slate-800 flex flex-col md:hidden p-1  gap-3 items-center mt-2 '>
          <div className='md:hidden text-3xl cursor-pointer hover:translate-x-2 transition-all' onClick={() => setOpen(!open)}><IoMenuOutline /></div>
          <section className={`flex flex-col items-center gap-4  mt-10`}>
            <Link to="/" className=' flex items-center gap-1 w-36  move p-1 px-3 rounded transition-all text-lg'><IoPersonOutline /> PORTFOLIO</Link>
            <Link to="/blog" className=' flex items-center gap-1 w-36  move p-1 px-3 rounded transition-all text-lg'><IoHomeOutline />BLOG</Link>
            <Link to="/posts" className=' flex items-center gap-1 w-36   move p-1 px-3 rounded transition-all text-lg'><IoFileTrayStackedOutline />POSTS</Link>
          </section>
    

        </div>
      }

      <section className='flex items-center gap-4'>
        <DarkModeContainer />
        <Link to="/auth/signup" className=' flex items-center gap-1 font-bold bg-main text-white  md:p-2 p-1 rounded-lg '> <PiSignIn /> SignUp</Link>
      </section>

    </nav>
  )
}


const DarkModeContainer = () => {

  const toggleDarkMode = () => {
    const isDark = localStorage.getItem("dark")
    console.log(isDark)
    if (isDark === "true") {
      localStorage.setItem("dark", false)
      document.documentElement.classList.remove("dark")
    } else {
      localStorage.setItem("dark", true)
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <div className="w-10 h-10">
      <label className="toggle" htmlFor="switch">
        <input onClick={toggleDarkMode} id="switch" className="input" type="checkbox" />
        <div className="icon icon--moon">
          <svg height={32} width={32} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd" />
          </svg>
        </div>
        <div className="icon icon--sun">
          <svg height={32} width={32} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>
      </label>
    </div>
  )
}