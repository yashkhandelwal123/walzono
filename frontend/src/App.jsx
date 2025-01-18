import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Body from './components/Body'
import HeroSection from './components/HeroSection'
import Login from './components/login'
import NotFoundPage from './components/404'
import Signup from './components/Signup'
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
          path  : "/login",
          element : <Login/>
        },
        {
          path  : "/signup",
          element : <Signup/>
        },
        {
          path  : "*",
          element : <NotFoundPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  )
} 

export default App