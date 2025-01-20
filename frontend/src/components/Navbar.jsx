// import React, {useEffect, useState} from 'react'
// import { Link } from 'react-router-dom'
// import { GoArrowUpRight } from "react-icons/go";
// import { SlArrowDown } from "react-icons/sl";
// import { useDispatch } from 'react-redux';
// import { addLocation } from '../redux/userSlice';
// import {useSelector} from 'react-redux'
// import { CgProfile } from "react-icons/cg";



// const Navbar = () => {

//   const [location, setLocation] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const {user} = useSelector(store => store.user);


//   useEffect(() => {
//     // Function to get the user's location
//     const fetchLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             // Fetch address using reverse geocoding API
//             fetch(
              // `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e1c19473641242a3a2bc426ed5cae494`
//             )
//               .then((response) => response.json())
//               .then((data) => {
//                 if (data.results && data.results.length > 0) {
//                   setLocation(data.results[0].formatted);
//                   // console.log(data.results[0]);
//                   setCity(data.results[0].components.town + ', ' + data.results[0].components.state);
//                   // console.log(data.results[0].components.state_district);
//                 } else {
//                   setError('Unable to fetch location details.');
//                 }
//               })
//               .catch(() => setError('Failed to fetch location.'));
//           },
//           (err) => {
//             switch (err.code) {
//               case err.PERMISSION_DENIED:
//                 setError('User denied the request for Geolocation.');
//                 break;
//               case err.POSITION_UNAVAILABLE:
//                 setError('Location information is unavailable.');
//                 break;
//               case err.TIMEOUT:
//                 setError('The request to get user location timed out.');
//                 break;
//               default:
//                 setError('An unknown error occurred.');
//                 break;
//             }
//           }
//         );
//       } else {
//         setError('Geolocation is not supported by this browser.');
//       }
//     };

//     fetchLocation();
//   }, []);


//   dispatch(addLocation(location));

//   return (
//     <div>
//       <div className="navbar">
//         <div className="flex-1">
//           <Link to='/' className="btn btn-ghost text-xl font-bold">GlowWithUs</Link>
//           <span className='mx-8 flex items-center text-lg hover:bg-[#E3C0D0] p-3 rounded-lg'> {city.length === 0 ? 'Select Location' : city} <SlArrowDown size={12} className='mx-2 mt-1'/> </span>
//           {/* {console.log(location)} */}

//         </div>
//         <div className="flex-none">
        
//         <div className=' flex items-center menu menu-horizontal '>
//           <span className='mx-5'>
//             <Link to='/add-parlour' className='flex items-center hover:rounded-md hover:bg-black hover:text-white px-6 py-2 text-lg text-black'>Add Parlour <GoArrowUpRight/></Link>
//           </span>

//           {!user ? ( 
//               <div>
//                 <span className='mx-5'>
//                   <Link to='/login' className='hover:rounded-md hover:bg-black hover:text-white px-6 py-2 text-lg text-black'>Login</Link>
//                 </span> 
//                 <span className='mx-5'>
//                   <Link to='/signup' className='hover:rounded-md hover:text-white hover:bg-black px-6 py-2 text-lg text-black'>SignUp</Link>
//                 </span> 
//               </div>
//           ) : (
//                 // <span className='mr-8'>
//                 //   <Link to='/' className='hover:rounded-md px-6 py-2 text-lg hover:bg-[#E3C0D0] text-black flex items-center'> <CgProfile class='mr-2' size={30}  /> {user?.name} <SlArrowDown size={12} className='mx-2 mt-1'/> </Link>
//                 // </span>

//                 <div className="dropdown dropdown-hover">
//                   <div tabIndex={0} role="button" className="hover:rounded-md px-6 py-2 text-lg hover:bg-[#E3C0D0] text-black flex items-center"><CgProfile class='mr-2' size={30}  /> {user?.name} <SlArrowDown size={12} className='mx-2 mt-1'/></div>
//                   <ul tabIndex={0} className="dropdown-content menu bg-black text-[#E3C0D0] rounded-box right-0 w-52 mt-5 shadow">
//                     <li><Link to='/profile'>Profile</Link></li>
//                     <li><Link to={'/logout'}>Logout</Link></li>
//                   </ul>
//                 </div>


//           )}          

        
//         </div>


//           {/* <ul className="menu menu-horizontal px-1">    
//              <li>
//               <details>
//                 <summary>Parent</summary>
//                 <ul className="bg-base-100 rounded-t-none p-2">
//                   <li><a>Link 1</a></li>
//                   <li><a>Link 2</a></li>
//                 </ul>
//               </details>
//             </li>
//           </ul> */}
//         </div>
//       </div>
//       <hr class="border-black" />
//     </div>
//   )
// }

// export default Navbar






// src/components/Navbar.js
import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {user} = useSelector((store) => store.user);
  return (
    <div className="bg-black text-white px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        GlamBook
      </div>
      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link to={'/add-partners'} className="hover:text-gray-300">
          Add Partners
        </Link>
        <a href="#help" className="hover:text-gray-300">
          Help
        </a>

        {user ? (
            <div className=""> {user?.name}</div>
        ) : (
          <Link to={'/login'} className="bg-gray-200 text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300">
          Log in
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
