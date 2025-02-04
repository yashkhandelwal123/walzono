import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPartnerInfo } from "../../redux/userSlice";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const RegistrationSteps = () => {

  const [parlourName, setParlourName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parlourAddress, setParlourAddress] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleParlourName = (event) => {
    setParlourName(event.target.value);
  };

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleParlourAddress = (event) => {
    setParlourAddress(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const info = {
      parlourName: parlourName,
      parlourAddress: parlourAddress,
      fullName: fullName,
      Phone: phone,
      email: email,
    };

    dispatch(getPartnerInfo(info));
    Navigate("/add-partner/step-2");
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <nav className="bg-white shadow-md fixed w-full">
        <div className="mx-4 lg:mx-20 px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
            GlamBook
          </h1>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row pt-10">
        <div className="bg-white rounded-lg h-fit shadow-lg p-6 mt-10 mx-4 lg:mx-20 border border-gray-300">
          <h2 className="text-lg lg:text-xl font-bold mb-4">
            Complete your registration
          </h2>

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
                <h3 className="text-md lg:text-lg font-semibold text-gray-900">
                  Parlour information
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
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 003.172 14H7.5V17a1 1 0 001 1h2a1 1 0 001-1v-2.5h3.828l.707.707a1 1 0 001.414-.414l.707-.707V10a6 6 0 00-6-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md lg:text-lg font-semibold text-gray-900">
                  Parlour operational details
                </h3>
                <p className="text-gray-600">
                  Services details, timing and images
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
                <h3 className="text-md lg:text-lg font-semibold text-gray-900">
                  Parlour documents
                </h3>
                <p className="text-gray-600">
                  PAN details, GST details and Bank info
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl text-black font-bold mt-10 mx-4 lg:mx-0">
            Parlour Information
          </h2>
          <form onSubmit={submitHandler} className="mx-4 lg:mx-0">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
              <h2 className="text-black text-xl lg:text-2xl">Parlour Name</h2>
              <span>Customers will see this name on GlamBook</span>
              <input
                type="text"
                className="w-full border border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                value={parlourName}
                onChange={handleParlourName}
                placeholder="Parlour Name*"
                required
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
              <h2 className="text-black text-xl lg:text-2xl">Owner Details</h2>
              <span>
                GlamBook will use these details for all business communications
                and updates
              </span>
              <span className="flex flex-col lg:flex-row w-full">
                <input
                  type="text"
                  className="w-full lg:w-1/2 border mr-0 lg:mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  value={fullName}
                  onChange={handleFullName}
                  placeholder="Full Name*"
                  required
                />

                <input
                  type="text"
                  className="border w-full lg:w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email address*"
                  required
                />
              </span>

              <div className="w-full flex flex-col lg:flex-row items-center mt-2 lg:mt-0">
                <span className="flex items-center mt-auto w-full lg:w-fit h-min border p-2 rounded-md">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/6ffcaa5c3dbbc6d73ac88592420da7be1714830815.png"
                    alt="India"
                    className="w-8 h-5"
                  />
                  <p className="text-black mx-2">+91</p>
                </span>
                <input
                  type="text"
                  className="border lg:ml-5 w-full border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  value={phone}
                  onChange={handlePhone}
                  placeholder="Phone number*"
                  required
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 w-full my-8 border border-gray-300">
              <h2 className="text-black text-xl lg:text-2xl">
                Parlour address details
              </h2>
              <span>
                Address details are basis the parlour location mentioned above
              </span>
              <span className="flex flex-col lg:flex-row w-full">
                <input
                  type="text"
                  className="w-full lg:w-1/2 border mr-0 lg:mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  placeholder="Shop no. / building no (optional)"
                />

                <input
                  type="text"
                  className="border w-full lg:w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  placeholder="Floor / tower (optional)"
                />
              </span>

              <span className="flex flex-col lg:flex-row w-full">
                <input
                  type="text"
                  className="w-full lg:w-1/2 border mr-0 lg:mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  placeholder="Area / Sector / Locality*"
                />

                <input
                  type="text"
                  className="border w-full lg:w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                  placeholder="City*"
                  required
                />
              </span>
              <input
                type="text"
                className="border w-full border-gray-300 text-black bg-white rounded-lg p-2 mt-2 lg:mt-10"
                value={parlourAddress}
                onChange={handleParlourAddress}
                placeholder="Full address*"
                required
              />
            </div>

            <div className="py-2 flex justify-end w-full">
              <button className="bg-green-600 text-white rounded-lg p-3 w-full lg:w-1/3 hover:bg-green-800 mb-5 text-center">
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
