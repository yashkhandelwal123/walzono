import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPartnerBankInfo, getPartnerDocument, getPartnerInfo } from "../../redux/userSlice";
import { Link } from "react-router";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

const RegistrationSteps = () => {

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [panNo , setPanNo] = useState();
  const [panName , setPanName] = useState();
  const [gstNo , setGstNo] = useState();
  const [licenseNo , setLicenseNo] = useState();
  const [accountNo , setAccountNo] = useState();
  const [reAccountNo , setReAccountNo] = useState();
  const [bankName , setBankName] = useState();
  const [ifscCode , setIfscCode] = useState();


  const Navigate = useNavigate();


  const submitHandler = async(e)=>{
    e.preventDefault();

    const info = {
        "PanNo" : panNo,
        "PanName" : panName,
        "GstNo" : gstNo,
        "LicenseNo" : licenseNo,
        "AccountNo" : accountNo,
        "BankName" : bankName,
        "IfscCode" : ifscCode,
        "PanImage" : selectedFile
    }
    dispatch(getPartnerBankInfo(info));
    Navigate('/')

    // backend Api call
  }


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const imageSubmitHandler = (event) => {
    event.preventDefault();
    // Handle image upload logic here (e.g., send to server)
    console.log(selectedFile);
  };


  const handlePanNo = (event) => {
    setPanNo(event.target.value);
  };

  const handlePanName = (event) => {
    setPanName(event.target.value);
  };

  const handleGstNo = (event) => {
    setGstNo(event.target.value);
  };

  const handleLicenseNo = (event) => {
    setLicenseNo(event.target.value);
  };

  const handleAccountNo = (event) => {
    setAccountNo(event.target.value);
  };

  const handleReAccountNo = (event) => {
    setReAccountNo(event.target.value);
  };

  const handleBankName = (event) => {
    setBankName(event.target.value);
  };

  const handleIfscCode = (event) => {
    setIfscCode(event.target.value);
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
                  className="h-5 w-5 text-gray-500 viewBox=0 0 20 20"
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
                <h3 className="text-lg font-semibold text-gray-900">
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

        {/* right side content box*/}
        <div className="w-1/2">
            {/* parlour Documents */}
            <h2 className="text-3xl text-black font-bold mt-10">Parlour documents</h2>
            <form onSubmit={submitHandler}>
                {/* pan card section 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
                    <div className="text-black text-2xl">PAN details</div>
                    <span>Enter the PAN details of the person or company who legally owns the parlour</span>
                    {/* pan card details */}
                    <span className="flex w-full mb-5">
                        <input 
                            type="text"
                            className="w-1/2 border mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={panNo}
                            onChange={handlePanNo}
                            placeholder="PAN number*"
                            required
                            />
                        
                        <input 
                            type="text"
                            className=" border w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={panName}
                            onChange={handlePanName}
                            placeholder="Full name as per PAN*"
                            required
                            />
                    </span>

                    {/* PAN image section */}
                    <div className="bg-blue-100 rounded-md border-2 border-dashed border-blue-300 p-4">
                        <form onSubmit={imageSubmitHandler}>
                            <div className="flex items-center justify-center">
                            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <FaImage size={70} class="text-[#3B82F6]"/>
                                <p className="text-lg text-[#3B82F6] text-bold">
                                    Upload your PAN
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

                {/* GST details section 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
            
                    <h2 className=" text-black text-2xl">GST details & License Details</h2>
                    <span>This should be linked to the PAN provided earlier for tax calculations</span>
                        
                    <span className="flex w-full mb-5">
                        <input 
                            type="text"
                            className="w-1/2 border mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={gstNo}
                            onChange={handleGstNo}
                            placeholder="GST number*"
                            required
                        />

                        <input 
                            type="text"
                            className="w-1/2 border mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={licenseNo}
                            onChange={handleLicenseNo}
                            placeholder="License number*"
                            required
                        />
                    </span>

                   
                
                </div>

                {/* Bank details section 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-8 border border-gray-300">
                    <div className="text-black text-2xl">Bank account details</div>
                    <span>This is where GlamBook will deposit your earnings</span>
                    {/* bank details */}
                    <span className="flex w-full">
                        <input 
                            type="text"
                            className="w-1/2 border mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={accountNo}
                            onChange={handleAccountNo}
                            placeholder="Enter Bank Account Number*"
                            required
                            />
                        
                        <input 
                            type="text"
                            className=" border w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={reAccountNo}
                            onChange={handleReAccountNo}
                            placeholder="Re-enter Bank Account Number*"
                            required
                            />
                    </span>

                    <span className="flex w-full mb-5">
                        <input 
                            type="text"
                            className="w-1/2 border mr-5 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={bankName}
                            onChange={handleBankName}
                            placeholder="Bank Name*"
                            required
                            />
                        
                        <input 
                            type="text"
                            className=" border w-1/2 border-gray-300 text-black bg-white rounded-lg p-2 mt-10"
                            value={ifscCode}
                            onChange={handleIfscCode}
                            placeholder="IFSC Code*"
                            required
                            />
                    </span>
                </div>

                
                <div className="py-2 mt-6 flex justify-end w-full">
                  <button className="bg-green-600 text-white rounded-lg p-3 w-1/3 hover:bg-green-800 mb-5 text-center ">Register</button>
                </div>
            </form>

        </div>


      </div>

    </div>
  );
};

export default RegistrationSteps;
