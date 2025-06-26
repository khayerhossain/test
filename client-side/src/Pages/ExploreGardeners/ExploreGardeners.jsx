import React from 'react';
import { useLoaderData } from 'react-router';
import { FaUser, FaVenusMars, FaHeartbeat, FaBriefcase, FaLightbulb } from 'react-icons/fa';

const ExploreGardeners = () => {
  const gardeners = useLoaderData();

  return (
    <section className="w-full my-12 px-4 md:px-8 lg:px-16 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-4 pt-3">
        Meet Our Amazing Gardeners 
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-5">
        Dive into the stories of passionate gardeners who are growing greener spaces, one tip at a time. Explore their profiles, learn from their experience, and get inspired to start your own gardening journey.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-4">
        {gardeners.map(gardener => (
          <div
            key={gardener._id}
            className="bg-base-100 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full flex flex-col items-center p-8"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="rounded-full w-28 h-28 object-cover border-4 border-green-400 mb-6"
            />

            <h2 className="text-2xl font-extrabold text-green-700 mb-4">{gardener.name}</h2>

            <div className="w-full grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <FaUser className="text-green-500" /> <span className="font-semibold">Age:</span> {gardener.age}
              </div>
              <div className="flex items-center gap-2">
                <FaVenusMars className="text-green-500" /> <span className="font-semibold">Gender:</span> {gardener.gender}
              </div>
              <div className="flex items-center gap-2">
                <FaHeartbeat className="text-green-500" /> <span className="font-semibold">Status:</span> {gardener.status}
              </div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-green-500" /> <span className="font-semibold">Exp:</span> {gardener.experience}
              </div>
              <div className="flex items-center gap-2 col-span-2 border-t pt-3 mt-3 text-green-700 font-semibold">
                <FaLightbulb className="text-green-600" /> Total Shared Tips: {gardener.totalSharedTips}
              </div>
            </div>

            <p className="mt-6 text-gray-600 text-center italic text-sm leading-relaxed">
              {gardener.about}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreGardeners;
