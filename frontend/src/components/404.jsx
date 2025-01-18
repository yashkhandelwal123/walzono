import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F3C4D6]">
      <div className="text-center max-w-lg p-6 bg-[#FDE2ED] shadow-xl rounded-lg">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          {/* Go Back Button */}
          <button
            className="btn btn-outline text-black hover:text-white hover:bg-black"
            onClick={() => navigate(-1)} // Navigate to the previous page
          >
            Go Back
          </button>

          {/* Home Button */}
          <button
            className="btn btn-primary"
            onClick={handleGoHome}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
