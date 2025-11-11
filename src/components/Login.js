import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidSignUpData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Here, I am using the useRef Hook to get a reference to the values of the email and password inputs.
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    // Function to handle the Sign In / Sign Up button click.
    const handleButtonClick = () => {
        let message;
        if (isSignInForm) {
            // Sign In form validation
            message = checkValidData(email.current.value, password.current.value);
        } else {
            // Sign Up form validation
            message = checkValidSignUpData(name.current.value, email.current.value, password.current.value)

        }
        seterrorMessage(message);

        // Once the form data is validated, we can proceed with Sign In / Sign Up.
        // If the form data is valid, the validation message will be "null".

        // If the message is "not null", we should return immediately and not proceed.       i.e) if(message) return;
        if (message) return;

        // Only when the message is "null" should we allow the user to sign in or sign up.   i.e)if(!message){Sign IN / Sign Up}
        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // Once the Sign up is done and user is created we have to update the User Profile.
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                    }).then(() => {
                        // Profile updated!
                        // Once after User profile is updated we have to update the Redux store.So, tat display name and photoURL get upadted to Redux store.
                        const { uid, email, displayName, photoURL } = auth.currentUser; //destructring all the user details
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        // Once after User is Signed UP we have to navigate to Browser page.
                        navigate("/browse");
                    }).catch((error) => {
                        seterrorMessage(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);  // Here we are consoling if any error while Signing UP
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // Once after User is Signed IN we have to navigate to Browser page.
                    navigate("/browse");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);   // Here we are consoling if any error while Signing IN
                });
        }
    }


    // Function to toggle between the Sign In and Sign Up forms.
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
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' ref={name} placeholder='Name' className='p-4 my-4 w-full bg-gray-800 rounded-md' />}
                <input type='text' ref={email} placeholder='Email' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
                <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-2 my-4 bg-red-700 w-full rounded-md font-bold text-white text-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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


