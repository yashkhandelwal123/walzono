
"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router";

const BookingForm = () => {
  const [slotSelect, setSlotSelect] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(""); // For error messages

  const navigate = useNavigate();

  const slotOptions = [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "5:00 PM",
    "7:00 PM",
    "9:00 PM",
  ];

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!slotSelect) {
      setError("Please select a time slot before proceeding.");
      return;
    }

    setError(""); // Clear error if all validations pass

    const info = {
      slot: slotSelect,
      name: name,
      phone: phone,
      email: email,
    };

    console.log(info);
    // Navigate or process form data
  };

  return (
    <div className="container bg-white mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="text-red-500 font-medium">Modify your booking</span>
      </button>

      {/* Success Banner */}
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <p className="text-yellow-700 flex items-center gap-2">
          🎉 Yay! you just saved ₹742 on this booking!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <form onSubmit={submitHandler}>
          <div className=" lg:col-span-2">
            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  1
                </span>
                <h2 className="text-xl font-semibold">Enter your details</h2>
              </div>

              <p className="text-gray-600 mb-6">
                We will use these details to share your booking information
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 w-full">
                  {/* name input */}
                  <div className="w-1/2">
                    <label className="block font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="max-w-md text-black bg-white w-full border p-2 rounded"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* email input */}
                  <div className="w-1/2">
                    <label className="block font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@abc.com"
                      className="max-w-md text-black bg-white w-full border p-2 rounded"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-2">Mobile Number</label>
                  <div className="flex gap-2 bg-white max-w-md">
                    <select className="w-[100px] bg-white border p-2 rounded">
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="text"
                      placeholder="e.g. 1234567890"
                      className="flex-1 border p-2 text-black bg-white rounded"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="my-8">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        2
                      </span>
                      <h2 className="text-xl font-semibold">Select Time Slot</h2>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      {slotOptions.map((option) => (
                        <div
                          key={option}
                          className={`border rounded-md px-4 py-2 text-center ${
                            slotSelect === option
                              ? "bg-blue-100 text-blue-600"
                              : "bg-white text-gray-600"
                          }`}
                          onClick={() => setSlotSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>
                </div>

                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Booking Summary */}
        <div>
           <div className="p-6 border rounded-lg">
             <div className="flex gap-4 mb-6">
               <div className="flex-1">
                 <h3 className="font-semibold text-lg mb-2">Collection O Golden Sapphire</h3>
                 <div className="flex items-center gap-2">
                   <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">5.0 ★</span>
                   <span className="text-sm text-gray-600">(1 Ratings) • Fabulous</span>
                 </div>
               </div>
               <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D"
                alt="Hotel"
                className="w-20 h-20 object-cover rounded"
              />
            </div>

            <div className="space-y-4 border-b pb-4 mb-4">
              {/* <p className="text-gray-600">1 Night</p> */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Sat, 25 Jan </span>
                <span className="ml-auto">1 Person</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 21H21M4 18H20M6 18V13M10 18V13M14 18V13M18 18V13M3 13L4.5 6H19.5L21 13H3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Bridal Makeup</span>
                <span className="ml-auto">2:30 Hr</span>
              </div>

            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Price For 1 Person</span>
                <span>₹2426</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Instant discount</span>
                <span>-₹1190</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>60% Coupon Discount</span>
                <span>-₹742</span>
              </div>
              {/* <div className="flex justify-between text-gray-600">
                <span>Price surge</span>
                <span>₹283</span>
              </div> */}
              <div className="flex flex-col border-t pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Payable Amount</span>
                  <span>₹777</span>
                </div>
                <span className="text-sm text-gray-500">inclusive of all taxes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
