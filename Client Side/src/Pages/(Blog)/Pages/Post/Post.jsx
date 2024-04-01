import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";


function Post() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <nav className="bg-blue-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
            </div>
            <div className="flex    items-center justify-center sm:items-stretch sm:justify-start">
              <div className='sm:hidden cursor' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>

                <FaBars />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >Homepages</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >About</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >Categories</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >Pages</a>
                </div>
              </div>
            </div>
            <div>
              <h1 className='items-center justify-center'> <span className='bg-teal-500 text-white'>Note</span> Book</h1>
            </div>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" ><IoMdSearch /></a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" ><FiEdit /></a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >contact</a>

              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium" >
                <div className="container">
                  <label className="toggle" htmlFor="switch">
                    <input id="switch" className="input" type="checkbox" />
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
              </a>
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button onClick={() => { setIsOpen(!isOpen) }} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="/assets/tony.jpeg" alt />
                  </button>
                </div>

                {isOpen && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                </div>}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && <div className="sm:hidden " id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className=" block rounded-md px-3 py-2 text-base font-medium">Homepages</a>
            <a href="#" className=" block rounded-md px-3 py-2 text-base font-medium">About</a>
            <a href="#" className=" block rounded-md px-3 py-2 text-base font-medium">Categories</a>
            <a href="#" className=" block rounded-md px-3 py-2 text-base font-medium">Pages</a>
          </div>
        </div>}
      </nav>






    </div>
  )
}

export default Post