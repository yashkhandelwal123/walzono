import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Body from './components/Body'
import HeroSection from './components/HeroSection'
import Login from './components/Login'
import NotFoundPage from './components/404'
import Signup from './components/Signup'
import Temp from './components/Temp'
import {Toaster} from 'react-hot-toast'
import PartnersLandingPage from './components/partners_component/landingPage'
import Add_Partners1 from './components/partners_component/Add_Partners_Step1'
import Add_Partners2 from './components/partners_component/Add_Partners_Step2'
import Add_Partners3 from './components/partners_component/Add_Partners_Step3'
import Services from './components/Services'
import PartnerDetail from './components/all_partners'
import Select_partner from './components/Select_partner'
import Booking from './components/Booking'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Cart from './components/Cart'
import ApplicationUnderReview from './components/partners_component/ApplicationUnderReview'
import AppDashBoard from './components/dashboard/AppDashBoard'

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
        },
        {
          path  : "/services/:id",
          element : <PartnerDetail/>
        },
        {
          path: "/partner/:id",
          element: <Select_partner/>
        },
        {
          path : "/booking",
          element : <Booking/>
        },
        {
          path : "/temp",
          element : <Temp/>
        },
        {
          path : "/cart",
          element : <Cart/>
        },
        {
          path : "/applicationUnderReview",
          element : <ApplicationUnderReview/>
        },
      ]
    },
    {
      path : "/home",
      element : <LandingPage/>
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
      path : "/add-partners",
      element : <PartnersLandingPage/>
    },
    {
      path : "/add-partner/step-1",
      element : <Add_Partners1/>
    },
    {
      path : "/add-partner/step-2",
      element : <Add_Partners2/>
    },
    {
      path : "/add-partner/step-3",
      element : <Add_Partners3/>
    },
    {
      path : "/services",
      element : <Services/>
    },
    {
      path : "/dashboard",
      element : <AppDashBoard/>
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster/>
    </>
  )
} 

export default App