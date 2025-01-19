import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Body from './components/Body'
import HeroSection from './components/HeroSection'
import Login from './components/Login'
import NotFoundPage from './components/404'
import Signup from './components/Signup'
import Temp from './components/Temp'
import {Toaster} from 'react-hot-toast'

function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>,
      children : [
        {
          path : "/",
          element : <HeroSection/>
        },
        {
          path  : "*",
          element : <NotFoundPage/>
        }
      ]
    },
    {
      path  : "/login",
      element : <Login/>
    },
    {
      path  : "/signup",
      element : <Signup/>
    },
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster/>
    </>
  )
} 

export default App