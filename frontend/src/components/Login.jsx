// import React, { useState, useRef } from "react";
// import {useNavigate} from 'react-router-dom'
// import axios from "axios";
// import {toast} from 'react-hot-toast'
// import { useDispatch } from "react-redux";
// import { getUser } from "../redux/userSlice";


// const Login = () => {
//   const [isOpen, setIsOpen] = useState(true); // Manage modal state
//   const [email, setEmail] = useState(""); 
//   const [password, setPassword] = useState("");
//   const modalRef = useRef();
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Open and close modal
//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   const submitHandler = async(e) => {
//     e.preventDefault();
//     console.log(email, password);
//     try {
//       const response = await axios.post("http://localhost:4000/api/user/login", {email , password},{
//         headers : {
//           "Content-Type" : "application/json"
//         },
//         withCredentials: true
//       });
//       if(response.data.success){
//         // console.log("here")
//         dispatch(getUser(response?.data?.user))
//         toast.success(response.data.message)
//         Navigate('/')
//       }
//       console.log(response);

//     } catch (error) {
//         toast.error(error.response.data.message)
//         console.log(error)
//     }
//   };

//   return (
//     <div>
//       {/* Button to open the modal */}
//       {/* <button
//         onClick={toggleModal}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//       >
//         Open Login
//       </button> */}

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div
//             ref={modalRef}
//             className="relative bg-[#f2c4d6] rounded-lg w-96 shadow-lg p-6 animate-fadeIn"
//           >
//             {/* Close Button */}
//             <button
//               onClick={toggleModal}
//               className="absolute top-3 right-3 text-black hover:text-gray-600 focus:outline-none"
//             >
//               ✕
//             </button>

//             {/* Title */}
//             <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
//               Login
//             </h2>

//             {/* Form */}
//             <form onSubmit={submitHandler}>
//               {/* Email Input */}
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-black py-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-black   py-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white "
//                   placeholder="Enter your password"
//                 />
//               </div>

//               {/* Submit Button */}
//               {/* <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//               >
//                 Login
//               </button> */}

//               <button 
//                 type = "submit"
//                 className="btn hover:bg-black hover:text-white w-full mt-4"
//                 >
//                     Login !!
//                 </button>

//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;









import React, { useState } from 'react';
import { Link } from 'react-router';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async(e) => {
        e.preventDefault();
        console.log(email, password);
        try {
          const response = await axios.post("http://localhost:4000/api/user/login", {email , password},{
            headers : {
              "Content-Type" : "application/json"
            },
            withCredentials: true
          });
          if(response.data.success){
            // console.log("here")
            dispatch(getUser(response?.data?.user))
            toast.success(response.data.message)
            Navigate('/')
          }
          console.log(response);
    
        } catch (error) {
            // console.log("error section here")
            toast.error(error.response.data.message)
            // console.log(error.response.data.message)
        }
      };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-300 rounded-lg shadow-md p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Welcome to Beauty At Home</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-black bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-black font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-black bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full text-white bg-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <Link
              to={'/signup'}
              className="w-full text-center text-black bg-gray-300 hover:text-white hover:bg-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;