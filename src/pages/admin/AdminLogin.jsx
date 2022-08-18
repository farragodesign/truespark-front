import  Alert  from '../../components/Alert'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Axios from '../../Axios'
import { AdminContext } from '../../context/AdminContext'
import { Helmet } from 'react-helmet'

const AdminLogin = () => {
    const navigate = useNavigate()
    // the states of the login popup
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [animate, setAnimate] = useState(false)
    
   

    // the admin context
    const { admin , setAdmin } = useContext(AdminContext)
   
 useEffect(()=>{
        if (admin) {
            console.log(admin);
            // setTimeout(()=> 
            navigate('/dashbord')
            // ,100)
        }else{
            console.log('NO ADMIN');
        }
        setTimeout(() => setAnimate(true) , 100)
    })
    // the function on admin login
    const loginHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        if (username === '' || password === '') {
            setError('Please fill all the fields')
            setTimeout(() => setError(''), 3000)
            setIsLoading(false)
        }
        else {
            Axios.post('/admin/login', { usename : username, password }).then((res) => {
                console.log(res.data);
                if (res.data.message) {
                    setError(res.data.message)
                    setTimeout(() => setError(''), 3000)
                    setIsLoading(false)
                }
                else {
                    setIsLoading(false)
                    console.log(res.data);
                    localStorage.setItem('jwt',res.data.token)
                    setAdmin(res.data.admin)
                    setTimeout(() => navigate('/dashboard') , 100)
                    setUsername('')
                    setPassword('')
                }
            }).catch((err) => {
                console.log(err);
                setIsLoading(false)
                setError(err.response.data.message ? err.response.data.message :'Something went wrong')
                setTimeout(() => setError(''), 3000)
            }
            )
        }
    }
    return (
        // the login popup component
        <div className='w-full h-screen mt-20 flex items-center justify-center container_here'>

<Helmet>
        <title>Admin Login</title>
        <meta name="description" content="Admin Login" />
        <meta name="keywords" content="Admin Login" />
        <link rel="canonical" href={`https://www.truespark.live/admin`} />
        <meta name="robots" content="noindex" />
      </Helmet>
                   

                <div className={`overflow-hidden -translate-y-100 opacity-0  absolute p-4 w-11/12 md:w-1/2 lg:w-1/3 mx-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 transition-all duration-1000 ${animate && 'translate-y-0 opacity-100'}`}>
                    {/* <svg onClick={onclick} className="cursor-pointer w-6 h-6 absolute right-8 top-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg> */}
                    <form className="space-y-6" onSubmit={(e) => loginHandler(e)}>
                        <h5 className="text-xl font-anak font-bold uppercase dark:text-white text-center text-blue-800 ">Sign in</h5>
                        <div>
                            <label for="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">username</label>
                            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" id="Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="your password here..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLoading ? <Spinner/> : 'Login'}</button>
                        
                    </form>
<Alert error={error} />
                </div>
             
        </div>
    )
}


export default AdminLogin