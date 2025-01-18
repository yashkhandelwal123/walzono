import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import {Toaster} from 'react-hot-toast'

const Body = () => {
  return (
    // <div className='flex flex-col min-h-screen mt-5'>Body</div>
    <div className='bg-[#f2c4d6] text-black flex flex-col min-h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Body