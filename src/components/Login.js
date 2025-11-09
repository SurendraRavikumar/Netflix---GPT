import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div
            className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg')`
            }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Header */}
            <Header />

            {/* Login Form */}
            <form className='w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-800 rounded-md' />}
                <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
                <button className='p-2 my-4 bg-red-700 w-full rounded-md font-bold text-white text-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? (
                    <>
                        New to Netflix? <span className="font-bold">Sign up now.</span>
                    </>
                ) : (
                    <>
                        Already registered? <span className="font-bold">Sign In now.</span>
                    </>
                )} </p>
            </form>
        </div>
    )
}

export default Login


