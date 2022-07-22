import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Axios from '../Axios'
import { UserContext } from '../context/UserContext'
import DropdownMenu from './DropdownMenu'
import ErrorToast from './ErrorToast'
import LoginControl from './LoginControl'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'

const HomeNavbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [errorOnLogout, setErrorOnLogout] = useState('')
  const [categories, setCategories] = useState([])
  const {user , setUser} = useContext(UserContext)
  const {admin , setAdmin} = useContext(AdminContext)
  

  useEffect(()=>{
      Axios.get('/categories').then((data)=>{
        console.log(data.data.categories);
          setCategories(data.data.categories)
      }
      ).catch((err)=>{
          console.log(err)
      }
      )
    
  },[])

  const logoutHandler = () => {
    const jwt = localStorage.getItem('jwt')
    Axios.post('/users/logout' , {jwt}).then(res => {
      console.log(res.data)
      if (res.data.message) {
        setErrorOnLogout(res.data.message)
        setTimeout(() => setErrorOnLogout(''), 3000)
      }
      else {
        setErrorOnLogout('')
        setUser(null)
        localStorage.removeItem('jwt')
        navigate('/about')
        setTimeout(() => navigate('/') , 100)
      }
    }
    ).catch(err => {
      console.log(err ? err.response.data.message : 'Something went wrong');
      setErrorOnLogout(err ? err.response.data.message : 'Something went wrong')
      setTimeout(() => setErrorOnLogout(''), 3000)
    }
    )
  }

  const adminLogout = () => {
    const jwt = localStorage.getItem('jwt')
    Axios.post('/admin/logout' , {jwt}).then(res => {
      console.log(res.data)
      if (res.data.message) {
        setErrorOnLogout(res.data.message)
        setTimeout(() => setErrorOnLogout(''), 3000)
      }
      else {
        setErrorOnLogout('')
        setAdmin(null)
        localStorage.removeItem('jwt')
        navigate('/about')
        setTimeout(() => navigate('/') , 100)
      }
    }
    ).catch(err => {
      console.log(err ? err.response.data.message : 'Something went wrong');
      setErrorOnLogout(err ? err.response.data.message : 'Something went wrong')
      setTimeout(() => setErrorOnLogout(''), 3000)
    }
    )
  }
  return (
    <div>

      <nav className="bg-slate-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray- fixed z-100 w-full m-0 top-0">
        <div className="container flex justify-between flex-wrap w-full items-center mx-auto ">
          <NavLink to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Truespark</span>
          </NavLink>
          <div className="flex md:order-2  w-auto justify-end">
           { user ? <DropdownMenu user={user} logoutHandler={logoutHandler}/> 
           : admin ?
          <button type="button" onClick={adminLogout} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}>Logout</button>
           :
           <button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `} onClick={() =>setIsLogin(!isLogin)}>Login</button>}
            
            <button data-collapse-toggle="mobile-menu-4" type="button" className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  ${user && 'ml-36'} `} aria-controls="mobile-menu-4" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg onClick={() => { setIsOpen(true) }} className={`${isOpen && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg onClick={() => { setIsOpen(false) }} className={` ${!isOpen && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <ul className="hidden md:flex flex-row space-x-8 mt-0 text-sm font-medium">
            <li>
              <NavLink to="/" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
            </li>
            {
                admin &&
                <li>
                <NavLink to="/dashboard" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white" aria-current="page">Dashboard</NavLink>
              </li>
              }
            <li>
              <NavLink to="/about" className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
            </li>
            {
              categories && categories.map((category, index) => {
                return (
                  <li key={category}>
              <NavLink to={`/category/${category._id}`} className="md:block py-2 pr-4 pl-3 uppercase hidden font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{category.name}</NavLink>
            </li>
                )
                })
            }
        

          </ul>
        </div>
      </nav>

      {isOpen ? console.log('isOpen') : console.log('notOpen')}
      {
        
        <aside class={`translate-x-100   w-48 fixed md:hidden z-50 right-0 top-14 transition-all ${isOpen && 'translate-x-0.5'}`} aria-label="Sidebar">
          <div class="border shadow-lg overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <ul class="space-y-2">
              <li>
                <NavLink to='/' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="ml-3 uppercase">Home</span>
                </NavLink>
              </li>
              {
                admin &&
                <li>
                <NavLink to='/dashbord' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="ml-3 uppercase">Dashbord</span>
                </NavLink>
              </li>
              }
              <li>
                <NavLink to='/about' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="flex-1 ml-3 whitespace-nowrap uppercase">about</span>
                </NavLink>
              </li>
              {
              categories && categories.map((category, index) => {
                return (
                  <li>
                  <NavLink to={`/category/${category._id}`} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap uppercase">{category.name}</span>
                  </NavLink>
                </li>
                )
                })
              }
              
             
              {
                user &&
                <div>
                   <div className='w-full border-t-2 border-b-2'>
                  <li>
                    <span class="flex-1 ml-3 whitespace-nowrap ">{user.name ? user.name : 'user'}</span>
                </li><li>
                    <span class="flex-1 ml-3 whitespace-nowrap  ">{user.email ? user.email :'user@example.com' }</span>
                </li>
                </div>
                <li className='mt-2'>
                    <span onClick={logoutHandler} class="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Logout</span>
                </li>
                </div>
              }


            </ul>
          </div>
        </aside>
      }
      {
        isLogin && <LoginControl onClick={()=>setIsLogin(false)} isLogin={isLogin} />
      }
      <ErrorToast event={errorOnLogout} onClick={()=>setErrorOnLogout(false)}  />
    </div>
  )
}

export default HomeNavbar