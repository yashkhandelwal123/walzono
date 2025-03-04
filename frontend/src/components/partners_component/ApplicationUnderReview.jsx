import { CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router";

const ApplicationUnderReview = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <Clock className="w-16 h-16 text-blue-500 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Your Application is Under Review
        </h1>
        <p className="text-gray-600 mt-2">
          Our team is currently reviewing your application. This process typically takes 24-48 hours. We will notify you via email once it is completed.
        </p>
        <div className="mt-6">
          <CheckCircle className="w-6 h-6 inline text-green-500 mr-2" />
          <span className="text-gray-700 font-medium">Thank you for your patience!</span>
        </div>
        <Link to='/dashboard'>
            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Go to Dashboard
            </button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationUnderReview;
