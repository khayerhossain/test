import React from "react";
import { Link } from "react-router"; // also fixed your import

const Error = () => {
  return (
    <div className="flex items-start justify-center pt-10 pb-4 px-4 min-h-[70vh] mt-16">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row items-center">
        <img
          src="https://i.ibb.co/rKmC9x3F/Construction-Vectors-Download-Free-High-Quality-Vectors-from-Freepik-Freepik.jpg"
          alt="Under Construction"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-gray-700 mb-6">
            Oops! The page you're looking for doesn't exist. Maybe it's under construction?
          </p>
          <Link
            to="/"
            className="inline-block px-5 py-3 bg-black text-white rounded-xl"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
