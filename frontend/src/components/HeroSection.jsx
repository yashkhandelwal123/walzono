import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            src='https://media.istockphoto.com/id/2177118708/photo/cosmetic-make-up-brush.jpg?s=612x612&w=0&k=20&c=wwyyOg5xSYpEcgLH-b02YdtaNG-ZM6hfdIbfBsHtQsw='
            className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Enhance Your Beauty</h1>
            <p className="py-6 text-lg" style={{fontFamily: 'cursive'}}>
              {/* "A seamless platform connecting customers with beauty parlors for personalized makeup services. Users can browse parlors, explore makeup categories like HD, Bridal, and Lite Makeup with pricing, and book appointments effortlessly for their preferred date and time." */}

              "Introducing a comprehensive platform designed to simplify makeup service bookings for customers and enhance visibility for beauty parlors. Users begin by creating an account, selecting their role as either a customer or a seller. As a customer, they gain access to a curated list of beauty parlors tailored to their preferences, complete with ratings, locations, and detailed profiles. Upon selecting a parlor, they can browse various makeup services, including HD Makeup, Bridal Makeup, and Lite Makeup, along with transparent pricing. Customers can then book an appointment seamlessly by choosing their desired service, date, and time. 

              For beauty parlors, the platform serves as an all-in-one solution to showcase their services, manage bookings, and connect with a broader audience. With its user-friendly interface, intuitive design, and efficient booking process, the platform ensures a smooth and delightful experience for both customers and sellers in the makeup and beauty industry."
        

            </p>
            <button className="btn hover:bg-black hover:text-white">Explore Now !!</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection