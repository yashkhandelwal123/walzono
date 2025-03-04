import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartnerDocument, getPartnerInfo } from "../../redux/userSlice";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

const RegistrationSteps = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [daySelect, setDaySelect] = useState([]);
  const [openTime, setOpenTime] = useState();
  const [closeTime, setCloseTime] = useState();
  const Navigate = useNavigate();
  const {partnerInfo} = useSelector((store) => store.user);

  const submitHandler = async (e) => {
    e.preventDefault();

    let info = {
      Images: selectedFile,
      services: categories,
      days: daySelect,
      openTime: openTime,
      closeTime: closeTime,
    };
    dispatch(getPartnerDocument(info));
    Navigate("/add-partner/step-3");

    // backend Api call {maybe not required}
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const imageSubmitHandler = (event) => {
    event.preventDefault();
    // Handle image upload logic here (e.g., send to server)
    console.log(selectedFile);
  };


  const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // const handleServiceOptionClick = (option) => {
  //   if (serviceSelect.includes(option)) {
  //       setServiceSelect(serviceSelect.filter((item) => item !== option));
  //   } else {
  //       setServiceSelect([...serviceSelect, option]);
  //   }
  // };

  const handleDayOptionClick = (option) => {
    if (daySelect.includes(option)) {
      setDaySelect(daySelect.filter((item) => item !== option));
    } else {
      setDaySelect([...daySelect, option]);
    }
  };

  return (
    <>
      {partnerInfo === null ? Navigate("/404") : 
      
      (<div className="bg-white min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full">
        <div className="mx-4 sm:mx-6 md:mx-20 px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Walzono
          </h1>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row pt-10 md:pt-20 items-center md:items-start justify-center gap-4 md:gap-10 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-12 lg:py-20">
        {/* left side content box */}
        <div className="bg-white rounded-lg h-fit shadow-lg p-6 mt-10 border border-gray-300 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
            Complete your registration
          </h2>

          <div className="flex flex-col items-start gap-4">
            {/* Parlour information */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
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
                  Parlour information
                </h3>
                <p className="text-gray-600">
                  Name, location, and contact number
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>

            {/* Parlour operational details */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
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
                  Parlour operational details
                </h3>
                <p className="text-gray-600">
                  Services details, timing, and images
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>

            {/* Parlour documents */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
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
                  Parlour documents
                </h3>
                <p className="text-gray-600">
                  PAN details, GST details, and Bank info
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right side content box */}
        <div className="w-full md:w-1/2">
          {/* Parlour Documents */}
          <h2 className="text-2xl md:text-3xl text-black font-bold mt-10">
            Parlour operational details
          </h2>
          <form onSubmit={submitHandler}>
            {/* Parlour Image Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
              <h2 className="text-black text-lg md:text-2xl">
                Add Parlour images
              </h2>
              <span>
                These will be used to create your in-app menu for online
                ordering
              </span>

              {/* Image upload section */}
              <div className="bg-blue-100 rounded-md border-2 border-dashed border-blue-300 p-4">
                <form onSubmit={imageSubmitHandler}>
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaImage size={70} className="text-[#3B82F6]" />
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
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
                      <p className="text-sm text-gray-700">
                        Selected file: {selectedFile.name}
                      </p>
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

            {/* Delivery Timing */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full my-8 border border-gray-300">
              <h2 className="text-black text-lg md:text-2xl">
                Parlour delivery timings
              </h2>
              <span>Mark open days</span>

              <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4 py-8">
                {dayOptions.map((option) => (
                  <div
                    key={option}
                    className={`border rounded-md px-4 py-2 text-center ${
                      daySelect.includes(option)
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white text-gray-600"
                    }`}
                    onClick={() => handleDayOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>

              {/* Timing Inputs */}
              <span className="text-black text-lg md:text-2xl">
                Timing of opening and closing
              </span>
              <div className="flex flex-col sm:flex-row mt-5">
                <div className="sm:w-full md:w-2/5">
                  <label className="block mt-5 text-sm text-gray-600">
                    Opening time
                  </label>
                  <input
                    type="text"
                    className="text-black bg-white shadow-lg border border-black p-2 w-full rounded-md text-lg placeholder:text-center"
                    placeholder="9:00 AM"
                    value={openTime}
                    onChange={(e) => setOpenTime(e.target.value)}
                  />
                </div>

                <div className="sm:w-full md:w-2/5 mt-5 sm:mt-0 md:ml-4">
                  <label className="block mt-5 text-sm text-gray-600">
                    Closing time
                  </label>
                  <input
                    type="text"
                    className="text-black bg-white shadow-lg border border-black p-2 w-full rounded-md text-lg placeholder:text-center"
                    placeholder="8:00 PM"
                    value={closeTime}
                    onChange={(e) => setCloseTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="py-2 flex justify-end w-full">
              <button className="bg-green-600 text-white rounded-lg p-3 w-full md:w-1/3 hover:bg-green-800 mb-5 text-center">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)}
    </>

    
  );
};

export default RegistrationSteps;

