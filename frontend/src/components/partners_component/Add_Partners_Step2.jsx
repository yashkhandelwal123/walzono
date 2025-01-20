import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPartnerDocument, getPartnerInfo } from "../../redux/userSlice";
import { Link } from "react-router";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

const RegistrationSteps = () => {

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [serviceSelect, setServiceSelect] = useState([]);
  const [daySelect , setDaySelect] = useState([]);
  const [openTime , setOpenTime] = useState(); 
  const [closeTime , setCloseTime] = useState();
  const Navigate = useNavigate();


  const submitHandler = async(e)=>{
    e.preventDefault();

    const info = {
        "Images" : selectedFile,
        "services" : serviceSelect,
        "days" : daySelect,
        "openTime" : openTime,
        "closeTime" : closeTime
    }
    dispatch(getPartnerDocument(info));
    Navigate('/add-partner/step-3')

    // backend Api call {maybe not required}
  }


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const imageSubmitHandler = (event) => {
    event.preventDefault();
    // Handle image upload logic here (e.g., send to server)
    console.log(selectedFile);
  };

  const serviceOptions = [
    'Bridal Makeup',
    'HD Makeup',
    'Matte Makeup',
    'Shimmery Makeup',
    'Airbrush Makeup',
    'Dewy Makeup',
  ];

  const dayOptions = [
    'Monday',
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
//   const timingZones = [
//     { value: '09:00 AM', label: '09:00 AM' },
//     { value: '09:15 AM', label: '09:15 AM' },
//     { value: '09:30 AM', label: '09:30 AM' },
//     { value: '09:45 AM', label: '09:45 AM' },
//     // Add more options as needed
//   ];

  const handleServiceOptionClick = (option) => {
    if (serviceSelect.includes(option)) {
        setServiceSelect(serviceSelect.filter((item) => item !== option));
    } else {
        setServiceSelect([...serviceSelect, option]);
    }
  };

  const handleDayOptionClick = (option) => {
    if (daySelect.includes(option)) {
      setDaySelect(daySelect.filter((item) => item !== option));
    } else {
      setDaySelect([...daySelect, option]);
    }
  };


  return (
    <div className="bg-white min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full">
        <div className=" mx-20 px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">GlamBook</h1>
        </div>
      </nav>

      <div className="flex pt-10">
        {/* left side content box*/}
        <div className="bg-white rounded-lg  h-fit shadow-lg p-6 mt-10 mx-20 border border-gray-300">
          <h2 className="text-xl font-bold mb-4">Complete your registration</h2>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 003.172 14H7.5V17a1 1 0 001 1h2a1 1 0 001-1v-2.5h3.828l.707.707a1 1 0 001.414-.414l.707-.707V10a6 6 0 00-6-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Restaurant information
                </h3>
                <p className="text-gray-600">
                  Name, location and contact number
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 viewBox=0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 003.172 14H7.5V17a1 1 0 001 1h2a1 1 0 001-1v-2.5h3.828l.707.707a1 1 0 001.414-.414l.707-.707V10a6 6 0 00-6-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Account information
                </h3>
                <p className="text-gray-600">
                  Email, password and account type
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 003.172 14H7.5V17a1 1 0 001 1h2a1 1 0 001-1v-2.5h3.828l.707.707a1 1 0 001.414-.414l.707-.707V10a6 6 0 00-6-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment information
                </h3>
                <p className="text-gray-600">
                  Credit card details and billing address
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right side content box*/}
        <div className="w-1/2">
            {/* parlour Documents */}
            <h2 className="text-3xl text-black font-bold mt-10">Parlour operational details</h2>
            <form onSubmit={submitHandler}>

                {/* parlour image section */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
                
                    <h2 className=" text-black text-2xl">Add Parlour images</h2>
                    <span>These will be used to create your in-app menu for online ordering</span>
                    {/* image upload section */}
                    <div className="bg-blue-100 rounded-md border-2 border-dashed border-blue-300 p-4">
                        <form onSubmit={imageSubmitHandler}>
                            <div className="flex items-center justify-center">
                            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <FaImage size={70} class="text-[#3B82F6]"/>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and
                                    drop
                                </p>
                                </div>
                                <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/jpeg, image/png, image/gif"
                                />
                            </label>
                            </div>
                            {selectedFile && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-700">Selected file: {selectedFile.name}</p>
                            </div>
                            )}
                            <button
                            type="submit"
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            >
                            Upload Image
                            </button>
                        </form>
                    </div>
                </div>

                {/* Services Provided */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
            
                    <h2 className=" text-black text-2xl">Select Services that you provide </h2>
                    <span>Your parlour will appear in searches for these Services</span>
                    

                    <div className="grid grid-cols-2 gap-4 py-8">
                        {serviceOptions.map((option) => (
                            <div
                            key={option}
                            className={`border rounded-md px-4 py-2 text-center  ${
                                serviceSelect.includes(option)
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-white text-gray-600'
                            }`}
                            onClick={() => handleServiceOptionClick(option)}
                            >
                            {option}
                            </div>
                        ))}
                    </div>  
                
                </div>

                {/* delivery timing */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full my-8 border border-gray-300">
            
                    <h2 className=" text-black text-2xl">Parlour delivery timings</h2>
                    <span className="">Mark open days</span>

                    <div className="grid grid-cols-4 gap-8 py-8">
                        {dayOptions.map((option) => (
                            <div
                            key={option}
                            className={`border rounded-md px-4 py-2 text-center  ${
                                daySelect.includes(option)
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-white text-gray-600'
                            }`}
                            onClick={() => handleDayOptionClick(option)}
                            >
                            {option}
                            </div>
                        ))}
                    </div>

                    
                    {/* timing  */}
                    {/* <div className="flex w-full"> */}
                        {/* opening time */}
                        {/* <div className="relative">
                            <button type="button" className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-haspopup="true" aria-expanded="false" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span className="text-gray-700">{time ? time : 'Select Time'}</span>
                                {!time.length ? "open" : ""}

                                <svg className="w-5 h-5 pl-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                                    {timingZones.map((option) => (
                                        <li
                                            key={option.value}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => { handleTimeZone({ target: { value: option.value } }); setDropdownOpen(false); }}
                                        >
                                                {option.label} 
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div> */}


                        {/* closing time */}
                        {/* <div className="relative">
                            <button type="button" className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-haspopup="true" aria-expanded="false" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span className="text-gray-700">{time ? time : 'Select Time'}</span>
                                {!time.length ? "open" : ""}

                                <svg className="w-5 h-5 pl-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                                    {timingZones.map((option) => (
                                        <li
                                            key={option.value}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => { handleTimeZone({ target: { value: option.value } }); setDropdownOpen(false); }}
                                        >
                                                {option.label} 
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div> */}
                    {/* </div> */}

                    <span className="text-black text-2xl">Timing of opening and closing</span>
                    <div className="flex mt-5">
                        <label className="block mt-5 text-sm text-gray-600">Opening time</label>
                        <input 
                            type="text"
                            className="text-black bg-white shadow-lg border border-black p-2 w-2/5 mt-4 rounded-md text-lg placeholder:text-center"
                            placeholder="9:00 AM"
                            value={openTime}
                            onChange={(e)=> setOpenTime(e.target.value)}
                         />

                        <label className="block mt-5 text-gray-600 text-sm ml-4">Closing time</label>
                        <input 
                            type="text"
                            className="text-black bg-white shadow-lg border border-black p-2 w-2/5 mt-4 rounded-md text-lg placeholder:text-center"
                            placeholder="8:00 PM"
                            value={closeTime}
                            onChange={(e)=> setCloseTime(e.target.value)}
                            
                         />
                    </div>

                </div>
                
                <div className="py-2 flex justify-end w-full">
                  <button className="bg-green-600 text-white rounded-lg p-3 w-1/3 hover:bg-green-800 mb-5 text-center ">Next</button>
                </div>
            </form>

        </div>


      </div>

    </div>
  );
};

export default RegistrationSteps;
