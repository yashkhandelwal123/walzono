import React, { useState, useRef } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true); // Manage modal state
  const modalRef = useRef();

  // Open and close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
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
              Login
            </h2>

            {/* Form */}
            <form>
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white "
                  placeholder="Enter your password"
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
                    Login !!
                </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
