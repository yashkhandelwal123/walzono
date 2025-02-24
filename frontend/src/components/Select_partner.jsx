"use client"

import { Star } from "lucide-react"

// const reviews = [
//   {
//     name: "Prakkash Satpute",
//     date: "Feb 4, 2025",
//     service: "For Skin brightening facial (O3+), Heater",
//     review: "Bajrangilal Sharma did a good job. His hands are gentle on the face. I recommend him for male facial.",
//     rating: 5,
//   },
//   {
//     name: "Ankit Jain",
//     date: "Feb 4, 2025",
//     service: "For Skin brightening facial (O3+), Heater",
//     review: "Great service and professional approach.",
//     rating: 5,
//   },
// ];

export default function Select_partner({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl relative animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-[1fr,300px]">
          {/* Main Content */}
          <div className="p-6 overflow-auto max-h-[80vh]">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Aroma bomb pedicure</h2>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.86</span>
                  <span className="text-gray-500">(4K reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">₹1299</span>
                  <span className="text-gray-500 line-through">₹1349</span>
                  <span className="px-2 py-1 rounded-full text-sm bg-green-50 text-green-600">₹50 off</span>
                </div>
                <div className="text-gray-500 mt-1">1 hr 15 mins</div>
              </div>
              <button
                className="px-6 py-2 bg-black text-white rounded-md  transition-colors"
                onClick={() => console.log("Add to cart")}
              >
                Add
              </button>
            </div>

            {/* Process Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">About the process</h3>
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Preparation",
                    description: "Wiping feet with a cloth followed by cutting and filing of nails to shape smile line",
                  },
                  {
                    step: 2,
                    title: "Soak & cuticle care",
                    description:
                      "Cuticle cream application on nails and dipping feet in warm water soaked with Cocoa orange bath bomb",
                  },
                  {
                    step: 3,
                    title: "Scraping & cleansing",
                    description:
                      "Removal of dead skin cells from heels & sole with Peditrix followed by cleansing feet till knees",
                  },
                  {
                    step: 4,
                    title: "Exfoliation",
                    description:
                      "Scrubbing feet till knees with tangy fresh scrub to gently exfoliate followed by cleaning of nails",
                  },
                ].map(({ step, title, description }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      {step}
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{title}</h4>
                      <p className="text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="border-l p-6">
            <div className="mb-8 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_520,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678118403717-007af5.jpeg"
                  alt="Empty cart"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <p className="text-gray-500">No items in your cart</p> */}
            </div>

            <div className="space-y-6">
              {/* <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded-full text-sm bg-green-50">%</span>
                  <h4 className="font-medium">Assured reward from CRED</h4>
                </div>
                <p className="text-gray-500 text-sm">On all online payments</p>
                <button className="text-blue-600 text-sm mt-1 hover:underline">View More Offers</button>
              </div> */}

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="font-medium">UC Promise</h4>
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_520,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678118403717-007af5.jpeg"
                    alt="UC Promise"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <ul className="space-y-3">
                  {["Verified Professionals", "Hassle Free Booking", "Transparent Pricing"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

