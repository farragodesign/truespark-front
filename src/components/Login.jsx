import React, { useState, useContext, useEffect } from 'react'
import Axios from '../Axios'
import { UserContext } from '../context/UserContext'
import Alert from './Alert'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";


// the login popup 

const Login = ({ onClick, isLogin ,onSignup }) => {

    const navigate = useNavigate()
    // the states of the login popup
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // the context of the user
    const { user , setUser } = useContext(UserContext)

    useEffect(() => {
  function start() {
    gapi.client.init({
      clientId: '691779687682-ks0pd75tv4uqg5hjmhp54m2m3h0lvvdr.apps.googleusercontent.com',
      scope: 'email',
    });
  }

  gapi.load('client:auth2', start);
}, []);


    // the function on user login
    const loginHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        if (email === '' || password === '') {
            setError('Please fill all the fields')
            setTimeout(() => setError(''), 3000)
            setIsLoading(false)
        }
        else {
            Axios.post('/users/login', { email, password }).then((res) => {
                console.log(res.data);
                if (res.data.message) {
                    setError(res.data.message)
                    setTimeout(() => setError(''), 3000)
                    setIsLoading(false)
                }
                else {
                    setIsLoading(false)
                    localStorage.setItem('jwt',res.data.token)
                    setUser(res.data.user)
                    onClick(onClick)
                    navigate('/about')
                    setTimeout(() => navigate('/') , 100)
                    setEmail('')
                    setPassword('')
                }
            }).catch((err) => {
                setIsLoading(false)
                setError(err.response.data ? err.response.data.message :'Something went wrong')
                setTimeout(() => setError(''), 3000)
            }
            )
        }
    }



    const handleFailure = (result) => {
  alert(result.details)
  console.log(result);
};

const handleLogin = async (googleData) => {
  console.log(googleData);
//   const res = await fetch('/api/google-login', {
//     method: 'POST',
//     body: JSON.stringify({
//       token: googleData.tokenId,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await res.json();
//   setLoginData(data);
//     console.log(data);  
//   localStorage.setItem('loginData', JSON.stringify(data));



Axios.post("users/loginwithgoogle", {
    name: googleData.profileObj.name,
    email: googleData.profileObj.email,
  })
    .then((res) => {
      console.log(res);
      localStorage.setItem("jwt", res.data.token);
      setUser(res.data.user)
      // localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/about";
    }
    )
};

    return (
      // the login popup component

      <div
        className={`overflow-hidden -translate-y-100 opacity-0  absolute p-4 w-11/12 md:w-1/2 lg:w-1/4 mx-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 transition-all duration-1000 ${
          isLogin && "translate-y-0 opacity-100"
        }`}
      >
        <svg
          onClick={onClick}
          className="cursor-pointer w-6 h-6 absolute right-8 top-4 text-blue-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <form className="space-y-6" onSubmit={(e) => loginHandler(e)}>
          <h5 className="text-xl font-anak font-bold uppercase dark:text-white text-center text-blue-800 ">
            Sign in
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
            >
              email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
            >
              password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="your password here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
          <p className='text-center'>or</p>
          <div className='flex w-full justify-center'>
          <GoogleLogin
            clientId={
              "691779687682-ks0pd75tv4uqg5hjmhp54m2m3h0lvvdr.apps.googleusercontent.com"
            }
            buttonText="Log in with Google"
            // costumebtn
            render={(renderProps) => (
                <div
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="google-btn"
                >
                   <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Sign in with google</b></p>
                </div>
            )}
            
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <span
              onClick={onSignup}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </span>
          </div>
        </form>

        <Alert error={error} />
      </div>
    );
}

export default Login