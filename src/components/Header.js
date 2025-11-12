import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user); // Here, we are accessing or subscribing to the store.


  // Function to handle user sign-out.
  const handleSignOut = () => {
    // Here, I’m using the "signOut" function from "firebase/auth" for User Sign out.
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        // If the user encounters an error while signing out, they will be redirected to the error page.
        navigate("/error")
      });
  }


  // I'm calling this Firebase API inside useEffect because I want it to run only once — on the first render.
  // Here, I’m using the "onAuthStateChanged" function from "firebase/auth" for state changes
  // The reason for this is that whenever a user signs in, signs up, or signs out,
  // we need to dispatch an action for each event. Instead of handling these events separately,
  // we can simply call this API once to manage all those state updates efficiently.

  // The "onAuthStateChanged" function runs every time the useEffect hook is called.
  // However, when the component unmounts, we need to clean up (unsubscribe) from the "onAuthStateChanged" listener.
  // This prevents memory leaks or multiple subscriptions from being created.
  // Therefore, we return the unsubscribe function from useEffect to handle cleanup when the component unmounts.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // If the user is signed in / logged in, the store will be initialized.
        // If the user is signed in / logged in then it will update the store.
        const { uid, email, displayName, photoURL } = user; //destructring all the user details
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // The user should navigate to the "browse" page only if they are signed in.
        navigate("/browse");
      } else {
        // User is signed out
        // If the user is siggned out. then, action will be dispatched with remove user.
        // If the user is signed in / logged in then it will update the store.
        dispatch(removeUser());
        // If the user is not siggned in and trying to navigate to browse page. then , he should navigate to "Login page"
        navigate("/");
      }
    });
    // unsubscribe when the component unmounts.
    return () => unsubscribe();
  }, []);


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo' />

      {/* This div should only be displayed when the user is signed in or signed up */}
      {user && <div className='flex p-2'>
        <img alt='usericon' className="w-12 h-12" src={user?.photoURL} />
        <button className='text-white font-bold' onClick={handleSignOut}> (Sign Out) </button>
      </div>}
    </div>

  )
}

export default Header
