import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPartnerDocument, getPartnerInfo } from "../../redux/userSlice";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

const RegistrationSteps = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  // const [serviceSelect, setServiceSelect] = useState([]);
  const [daySelect, setDaySelect] = useState([]);
  const [openTime, setOpenTime] = useState();
  const [closeTime, setCloseTime] = useState();

  // for service selection
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const Navigate = useNavigate();

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

  // const serviceOptions = [
  //   'Bridal Makeup',
  //   'HD Makeup',
  //   'Matte Makeup',
  //   'Shimmery Makeup',
  //   'Airbrush Makeup',
  //   'Dewy Makeup',
  // ];

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

  // const handleAddSubcategory = () => {
  //   setSubcategories([...subcategories, { name: "", price: "" }]);
  // };

  const handleSubcategoryChange = ( index, field, value ,e) => {
    const updatedSubcategories = [...subcategories];
    updatedSubcategories[index][field] = value;
    setSubcategories(updatedSubcategories);
    e.preventDefault();
  };

  // const handleAddCategory = () => {
  //   if (!currentCategory.trim() || subcategories.length === 0) return;
  //   if (editingIndex !== null) {
  //     const updatedCategories = [...categories];
  //     updatedCategories[editingIndex] = {
  //       name: currentCategory,
  //       subcategories,
  //     };
  //     setCategories(updatedCategories);
  //     setEditingIndex(null);
  //   } else {
  //     setCategories([...categories, { name: currentCategory, subcategories }]);
  //   }
  //   setCurrentCategory("");
  //   setSubcategories([]);
  // };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!currentCategory.trim() || subcategories.length === 0) return;
    if (editingIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editingIndex] = {
        name: currentCategory,
        subcategories,
      };
      setCategories(updatedCategories);
      setEditingIndex(null);
    } else {
      setCategories([...categories, { name: currentCategory, subcategories }]);
    }
    setCurrentCategory("");
    setSubcategories([]);
  };
  
  const handleAddSubcategory = (e) => {
    e.preventDefault();
    setSubcategories([...subcategories, { name: "", price: "" }]);
  };
  
  

  const handleEditCategory = (index) => {
    setCurrentCategory(categories[index].name);
    setSubcategories(categories[index].subcategories);
    setEditingIndex(index);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full">
        <div className="mx-4 sm:mx-6 md:mx-20 px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            GlamBook
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

            {/* Services Provided */}

            {/* <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
          <h2 className="text-black text-lg md:text-2xl">Select Services that you provide</h2>
          <span>Your parlour will appear in searches for these Services</span>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 py-8">
            {serviceOptions.map((option) => (
              <div
                key={option}
                className={`border rounded-md px-4 py-2 text-center ${
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
            </div> */}

            <div className="p-4 bg-white shadow-lg rounded-lg sm:w-11/12 md:w-10/12 lg:w-full text-black my-10 border border-gray-300">
              <h2 className="text-xl mb-4">
                Add Service Category
              </h2>
              <input
                type="text"
                placeholder="Enter category name"
                value={currentCategory}
                onChange={(e) => setCurrentCategory(e.target.value)}
                className="mb-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
              />

              <h3 className="text-lg font-semibold">Subcategories</h3>
              {subcategories.map((sub, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-2 my-2"
                >
                  <input
                    type="text"
                    placeholder="Subcategory Name"
                    value={sub.name}
                    onChange={(e) =>
                      handleSubcategoryChange(index, "name", e.target.value)
                    }
                    className="mb-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                    />
                  <input
                    type="text"
                    placeholder="Price"
                    value={sub.price}
                    onChange={(e) =>
                      handleSubcategoryChange(index, "price", e.target.value)
                    }
                    className="mb-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                    />
                </div>
              ))}
              <button
                onClick={handleAddSubcategory}
                className=" w-full sm:w-auto p-2 text-white bg-yellow-500 rounded mt-5 "
              >
                Add Subcategory
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-blue-500 text-white w-full sm:w-auto p-2 rounded float-right mt-5"
              >
                {editingIndex !== null ? "Update Category" : "Add Category"}
              </button>

              <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-400 text-center">
                  Added Categories
                </h2>
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg mt-2 text-center sm:text-left"
                  >
                    <h3 className="text-lg font-semibold">{cat.name}</h3>
                    <ul className="list-disc ml-5 text-sm">
                      {cat.subcategories.map((sub, subIndex) => (
                        <li key={subIndex}>
                          {sub.name} - ₹{sub.price}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleEditCategory(index)}
                      className="mt-2 bg-red-500 text-md px-8 p-2 rounded text-white w-full sm:w-auto"
                    >
                      Edit
                    </button>
                  </div>
                ))}
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
    </div>
  );
};

export default RegistrationSteps;

