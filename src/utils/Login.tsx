import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
        <Header />
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'
             alt='background' />
        <form className='loginForm bg-black opacity-90 z-10 absolute top-1/3 left-1/3 m-auto p-16 w-1/3 text-white'>
          <h1 className=' text-2xl p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input className='w-full p-4 my-2 bg-gray-700' type='text' placeholder='Full Name' />}
          <input className='w-full p-4 my-2 bg-gray-700' type='text' placeholder='Email ID' />
          <input className='w-full p-4 my-2 bg-gray-700' type='password' placeholder='Password' />
          <button className='bg-red-700 p-4 w-full my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to NetFlix? Sign Up" : "Already Registered? Sign In"} </p>
        </form>
    </div>
  )
}

export default Login