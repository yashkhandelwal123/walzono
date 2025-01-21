// Import React and Tailwind CSS
import React from 'react';

const GlamBook = () => {
  return (
    <div className="text-white min-h-screen">
      <header className="flex justify-between items-center p-4 bg-black">
        <div className="text-2xl font-bold">GlamBook</div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white hover:underline">Browse</a>
          <a href="#" className="text-white hover:underline">Help</a>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded">Log in</button>
        </nav>
      </header>

      <div
        className="flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path-to-your-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Book a home makeup service in just a few clicks.
        </h1>
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search for service"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
          />
          <button className="px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-r">
            Search
          </button>
        </div>
        <p className="text-gray-200 mt-4">
          Find your perfect look with the best makeup artists in town.
        </p>
      </div>
    </div>
  );
};

export default GlamBook;
