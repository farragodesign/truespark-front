import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const LoginControl = ({onClick , isLogin}) => {
    const [isSignup, setIsSignup] = useState(false)
    return (
        <div>
            <div onClick={onClick} className=' top-0 w-full h-screen flex items-center justify-center fixed z-50 bg-slate-400 opacity-40'>
            </div>
            <div className='transition-all top-0 w-full h-screen flex items-center justify-center fixed z-100'>
                {!isSignup ? <Login onSignup={() =>setIsSignup(true)} onClick={onClick} isLogin={isLogin}/> : <Signup onSignup={() =>setIsSignup(false)} onClick={onClick} isLogin={isLogin}/>}
            </div>
        </div>
    )
}

export default LoginControl