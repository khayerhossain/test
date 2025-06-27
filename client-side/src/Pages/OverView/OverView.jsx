import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import { FaLeaf, FaSeedling, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Overview = () => {
  const { user, totalItems, myItemsCount } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Welcome back, {user?.displayName || 'Gardener'}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Items */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
          <div className="flex items-center justify-center text-green-700 text-5xl mb-4">
            <FaLeaf />
          </div>
          <h2 className="text-4xl font-bold text-center text-green-900">{totalItems}</h2>
          <p className="text-center text-gray-700 mt-2">Total Gardening Tips</p>
        </div>

        {/* My Tips */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
          <div className="flex items-center justify-center text-green-700 text-5xl mb-4">
            <FaSeedling />
          </div>
          <h2 className="text-4xl font-bold text-center text-green-900">{myItemsCount}</h2>
          <p className="text-center text-gray-700 mt-2">Tips You Shared</p>
        </div>

        {/* Add New Tip Card */}
        <div
          onClick={() => navigate('/sharetip')}
          className="bg-green-100 p-6 rounded-xl shadow hover:bg-green-200 transition cursor-pointer text-center flex flex-col items-center justify-center"
        >
          <div className="text-5xl text-green-700 mb-3">
            <FaPlusCircle />
          </div>
          <h3 className="text-xl font-semibold text-green-900">Share a New Tip</h3>
          <p className="text-sm text-gray-700 mt-1">Inspire others with your garden wisdom!</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
