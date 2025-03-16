import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFoundPage from './components/404'
import {Toaster} from 'react-hot-toast'
import Dashboard from './components/Dashboard'
import AppDashBoard from './components/dashboard/AppDashBoard'
import PartnerRegistration from './components/partners_component/PartnerRegistration'
import OTPLogin from './components/partners_component/OTPLogin'
import ComingSoon from './components/ComingSoon'
import Contact from './components/Contact'

function App1() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <ComingSoon/>
    },
    {
      path : "/contact",
      element : <Contact/>
    },
    {
      path : "/partner/register",
      element : <PartnerRegistration/>
    },
    {
      path : "/partner/login",
      element : <OTPLogin/>
    },
    {
      path : "/partner/dashboard",
      element : <AppDashBoard/>
    },
    {
      path  : "*",
      element : <NotFoundPage/>
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster/>
    </>
  )
} 

export default App1