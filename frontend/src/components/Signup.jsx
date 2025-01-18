import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {toast} from 'react-hot-toast'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true); // Manage modal state
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const modalRef = useRef();
  const {location} = useSelector(store => store.user);
  const Navigate = useNavigate();

  // Open and close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    // console.log(email, password , phone, name);
    try {
      const response = await axios.post("http://localhost:4000/api/user/register", {name , email , password, phone },{
        headers : {
          "Content-Type" : "application/json"
        },
        withCredentials: true
      });
      console.log(response);
      if(response.data.success){
        console.log("here")
        toast.success(response.data.message)
        Navigate('/login')
      }
      console.log(response);

    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      {/* <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Open Login
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            ref={modalRef}
            className="relative bg-[#f2c4d6] rounded-lg w-96 shadow-lg p-6 animate-fadeIn"
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-black hover:text-gray-600 focus:outline-none"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
              Create Account
            </h2>

            {/* Form */}
            <form onSubmit={submitHandler}>

            <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black py-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your Name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black py-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black   py-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white "
                  placeholder="Enter your password"
                />
              </div>


              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black py-2"
                >
                  Phone No
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your phone"
                />
              </div>

              {/* Submit Button */}
              {/* <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button> */}

              <button 
                type = "submit"
                className="btn hover:bg-black hover:text-white w-full mt-4"
                >
                    Signup
                </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
