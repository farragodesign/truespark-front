import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react'

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray- fixed z-50 w-full m-0 top-0">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <NavLink to="/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavLink>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
     <svg onClick={()=> {setIsOpen(true)}} className={`${isOpen && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
     <svg onClick={()=> {setIsOpen(false)}} className={` ${!isOpen && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
      <li>
        <NavLink to="/" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
      </li>
      <li>
        <NavLink to="/article" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Articles</NavLink>
      </li>
      <li>
        <NavLink to="/script" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Scripts</NavLink>
      </li>
      <li>
        <NavLink to="/poem" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Poems</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

{
  isOpen && 
  <aside class="w-64 fixed md:hidden z-50 right-0 top-16" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <ul class="space-y-2">
         <li>
            <NavLink to='/' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="ml-3 uppercase">Home</span>
           </NavLink>
         </li>
         <li>
            <NavLink to='/about' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">about</span>
           </NavLink>
         </li>
         <li>
            <NavLink to='/article' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">article</span>
           </NavLink>
         </li>
         <li>
            <NavLink to='/script' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">script</span>
           </NavLink>
         </li>
         <li>
            <NavLink to='/poem' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">poem</span>
           </NavLink>
         </li>
         <li>
            <NavLink to='/contact' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">Contact</span>
           </NavLink>
         </li>

         <li>
            <NavLink to='/' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap uppercase">Logout</span>
           </NavLink>
         </li>

      </ul>
   </div>
</aside>
}
    </div>
  )
}

export default HomeNavbar