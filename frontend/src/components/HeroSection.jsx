// import React from 'react'
// import { Link } from 'react-router'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'

// const HeroSection = () => {

//   const {user} = useSelector((state) => state.user)
//   const Navigate = useNavigate();

//   return (
//     <div className="hero min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//             <img
//             // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//             src='https://media.istockphoto.com/id/2177118708/photo/cosmetic-make-up-brush.jpg?s=612x612&w=0&k=20&c=wwyyOg5xSYpEcgLH-b02YdtaNG-ZM6hfdIbfBsHtQsw='
//             className="max-w-sm rounded-lg shadow-2xl" />
//             <div>
//             <h1 className="text-5xl font-bold">Enhance Your Beauty</h1>
//             <p className="py-6 text-lg" style={{fontFamily: 'cursive'}}>
//               {/* "A seamless platform connecting customers with beauty parlors for personalized makeup services. Users can browse parlors, explore makeup categories like HD, Bridal, and Lite Makeup with pricing, and book appointments effortlessly for their preferred date and time." */}

//               "Introducing a comprehensive platform designed to simplify makeup service bookings for customers and enhance visibility for beauty parlors. Users begin by creating an account, selecting their role as either a customer or a seller. As a customer, they gain access to a curated list of beauty parlors tailored to their preferences, complete with ratings, locations, and detailed profiles. Upon selecting a parlor, they can browse various makeup services, including HD Makeup, Bridal Makeup, and Lite Makeup, along with transparent pricing. Customers can then book an appointment seamlessly by choosing their desired service, date, and time. 

//               For beauty parlors, the platform serves as an all-in-one solution to showcase their services, manage bookings, and connect with a broader audience. With its user-friendly interface, intuitive design, and efficient booking process, the platform ensures a smooth and delightful experience for both customers and sellers in the makeup and beauty industry."
        

//             </p>
//             {/* <button onClick={!user ? (Navigate('/login')) : (Navigate('/hello'))} className="btn hover:bg-black hover:text-white">Explore Now !!</button> */}
//             <Link to={!user ? '/login' : '/hello'} className="btn hover:bg-black hover:text-white">Explore Now !!</Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HeroSection








// src/components/HomeContent.js
import React from "react";

const HomeContent = () => {
  return (

    <div className="bg-gray-100">
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('https://res.cloudinary.com/daf7blofc/image/upload/v1737300676/download_kpmls4.webp')` }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Content */}
        <div className="relative text-center text-white px-4 max-w-4xl mb-40">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Book a home makeup service in just a few clicks.
          </h1>

          {/* Search Box */}
          <div className="mt-8">
            <form className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for service"
                className="w-full max-w-6xl px-4 py-4 text-black bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-black text-white font-medium rounded-r-md hover:bg-gray-900"
              >
                Search
              </button>
            </form>
          </div>

          {/* Subtext */}
          <p className="mt-4 text-lg">
            Find your perfect look with the best makeup artists in town.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Popular in Your Area</h2>
        {/* <div className="flex space-x-4 mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded-md">All</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Today</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Tomorrow</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">This week</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Next week</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">This month</button>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2m8fPpP2IgOJx2yQNsgpT-w4OTsd84h3FQ&s"
              alt="Glow Up (Bridal)"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Glow Up (Bridal)</h3>
            <p className="text-gray-600 mb-2">Smokey Eye (Evening)</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://img.freepik.com/premium-photo/young-woman-with-glowing-natural-makeup-look-including-dewy-skin-soft-eyeshadow-posing-against-clean-lightcolored-background_1229213-56597.jpg"
              alt="Beach Vibes"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Natural Look (Daytime)</h3>
            <p className="text-gray-600 mb-2">Charity Event Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://img.lovepik.com/photo/60180/7712.jpg_wh860.jpg"
              alt="City Lights"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Kids Party Makeup</h3>
            <p className="text-gray-600 mb-2">Kind of Light Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCQN8L7-oBFuBReEnKyc3-pGGpBfCrA_p9g&s"
              alt="Mountain Adventure"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">HD Makeup</h3>
            <p className="text-gray-600 mb-2">Heavy Duty Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
        </div>
      </div>



      {/* Section 3 */}
      <div className="container mx-auto px-4 py-20 bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">This week in Beauty Parlours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2m8fPpP2IgOJx2yQNsgpT-w4OTsd84h3FQ&s"
              alt="Glow Up (Bridal)"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Glow Up (Bridal)</h3>
            <p className="text-gray-600 mb-2">Smokey Eye (Evening)</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://img.freepik.com/premium-photo/young-woman-with-glowing-natural-makeup-look-including-dewy-skin-soft-eyeshadow-posing-against-clean-lightcolored-background_1229213-56597.jpg"
              alt="Beach Vibes"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Natural Look (Daytime)</h3>
            <p className="text-gray-600 mb-2">Charity Event Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://img.lovepik.com/photo/60180/7712.jpg_wh860.jpg"
              alt="City Lights"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">Kids Party Makeup</h3>
            <p className="text-gray-600 mb-2">Kind of Light Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCQN8L7-oBFuBReEnKyc3-pGGpBfCrA_p9g&s"
              alt="Mountain Adventure"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">HD Makeup</h3>
            <p className="text-gray-600 mb-2">Heavy Duty Makeup</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Book Now</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">View Details</button>
          </div>
        </div>
      </div>
      {/* <hr class="border border-gray-300" /> */}


      {/* Section 4 */}

      <div className="container mx-auto bg-white my-full px-10 py-10">
        <h1 className="text-2xl font-bold mb-6">Top Beauty Parlours to follow</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJlYXV0eSUyMHBhcmxvdXJ8ZW58MHx8MHx8fDA%3D"
              alt="Beauty Bar"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Beauty Bar</h2>
            <p className="text-gray-600">394 followers</p>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4">
              Follow
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1676809172626-34d0538cc8e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0eSUyMHBhcmxvdXJ8ZW58MHx8MHx8fDA%3D"
              alt="Glamorous Beauty Lounge"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Glamorous Beauty</h2>
            <p className="text-gray-600">250 followers</p>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4">
              Follow
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <img
              src="https://img.freepik.com/free-photo/different-cosmetics-types-scattered-pink-table_23-2148046961.jpg"
              alt="The Glam Studio"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">The Glam Studio</h2>
            <p className="text-gray-600">180 followers</p>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4">
              Follow
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1664048713210-9db5ee2a7e08?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwcGFybG91cnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Chic Beauty Spot"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Chic Beauty Spot</h2>
            <p className="text-gray-600">300 followers</p>
            <button className="bg-black  text-white font-bold py-2 px-4 rounded-lg mt-4">
              Follow
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1681490823401-e5e56eb30c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlYXV0eSUyMHBhcmxvdXJ8ZW58MHx8MHx8fDA%3D"
              alt="Radiant Beauty Hub"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Radiant Beauty Hub</h2>
            <p className="text-gray-600">400 followers</p>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4">
              Follow
            </button>
          </div>
        </div>
      </div>
      

    </div>


  );
};

export default HomeContent;





// import React from 'react';

// function PopularInYourArea() {
//   return (
    
//   );
// }

// export default PopularInYourArea;