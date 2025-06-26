import React, { useState, useEffect } from 'react';
import { FaUser, FaVenusMars, FaBriefcase, FaLightbulb } from 'react-icons/fa';

const FeaturedGardeners = ({ active }) => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    if (Array.isArray(active)) {
      const filtered = active.filter(gardener => gardener.status === "Active");
      setActiveGardeners(filtered);
    }
  }, [active]);

  return (
    <div className="w-full my-12 px-4 md:px-8 lg:px-16">
      <div className="bg-[#03373D] rounded-3xl p-10 md:p-16">
        
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Featured Gardeners
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-10">
          Meet some of our most passionate and active gardeners who are always sharing helpful tips and growing green magic in their own spaces. Let their stories inspire your gardening journey!
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeGardeners.map(gardener => (
            <div key={gardener._id} className="flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-[30px] p-6 md:p-8 shadow-lg relative overflow-hidden flex flex-col items-center text-center">

                {/* Optional Glow / Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white opacity-20 rounded-[30px] blur-2xl z-0" />

                {/* Image */}
                <div className="w-24 h-24 mb-4 z-10">
                  <img
                    src={gardener.image}
                    alt={gardener.name}
                    className="w-full h-full rounded-full object-cover border-4 border-green-400 shadow-md"
                  />
                </div>

                {/* Name */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 z-10">
                  {gardener.name}
                </h2>

                {/* Info Badges */}
                <div className="flex flex-wrap justify-center gap-2 text-sm mb-4 z-10">
                  <span className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1 text-green-800">
                    <FaUser /> Age: {gardener.age}
                  </span>
                  <span className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1 text-green-800">
                    <FaVenusMars /> {gardener.gender}
                  </span>
                  <span className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1 text-green-800">
                    <FaBriefcase /> Exp: {gardener.experience}
                  </span>
                </div>

                {/* Shared Tips */}
                <div className="flex items-center gap-2 text-green-800 font-semibold mb-3 z-10">
                  <FaLightbulb /> Shared Tips: {gardener.totalSharedTips}
                </div>

                {/* About */}
                <p className="text-gray-600 text-sm italic z-10">
                  {gardener.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGardeners;
