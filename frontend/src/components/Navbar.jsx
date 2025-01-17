import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";


const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl font-bold">GlowWithUs</Link>
        </div>
        <div className="flex-none">
        
        <div className=' flex items-center menu menu-horizontal '>
        <span className='mx-5'>
            <Link to='/add-parlour' className='flex items-center hover:rounded-md hover:bg-black hover:text-white px-6 py-2 text-lg text-black'>Add Parlour <GoArrowUpRight/></Link>
          </span>
          <span className='mx-5'>
            <Link to='/login' className='hover:rounded-md hover:bg-black hover:text-white px-6 py-2 text-lg text-black'>Login</Link>
          </span>
          <span className='mx-5'>
            <Link to='/signup' className='hover:rounded-md hover:text-white hover:bg-black px-6 py-2 text-lg text-black'>SignUp</Link>
          </span>

        </div>


          {/* <ul className="menu menu-horizontal px-1">    
             <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul> */}
        </div>
      </div>
      <hr class="border-black" />
    </div>
  )
}

export default Navbar