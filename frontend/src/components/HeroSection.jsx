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
            <p className="py-6">
            "A seamless platform connecting customers with beauty parlors for personalized makeup services. Users can browse parlors, explore makeup categories like HD, Bridal, and Lite Makeup with pricing, and book appointments effortlessly for their preferred date and time."
            </p>
            <button className="btn hover:bg-black hover:text-white">Explore Now !!</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection