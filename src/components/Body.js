import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();

  // Here we defining all our paths
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);


  // I'm calling this Firebase API inside useEffect because I want it to run only once — on the first render.
  // The reason for this is that whenever a user signs in, signs up, or signs out,
  // we need to dispatch an action for each event. Instead of handling these events separately,
  // we can simply call this API once to manage all those state updates efficiently.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user; //destructring all the user details
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
