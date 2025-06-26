import React from "react";
import { Link } from "react-router";

const TipCards = ({ data }) => {
  const { image, title, author, description, createdAt, category, _id } = data;

  return (
    <div className="p-4">
      {/* Mobile Card */}
      <div className="block md:hidden bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-5 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-green-900">{title}</h3>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium">{author}</p>
          <p className="text-xs text-gray-400">{createdAt}</p>
          <p className="text-sm text-gray-800 line-clamp-3 leading-relaxed">
            {description}
          </p>
          <Link to={`/tipdetails/${_id}`}>
            <button className="w-full mt-3 bg-black text-white py-2.5 rounded-md text-sm transition">
              See More
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto mt-6">
        <table className="w-full table-auto border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-green-100 text-sm text-green-900 text-center">
              <th className="p-4">Photo</th>
              <th className="p-4">Author</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Description</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-center text-gray-800">
            <tr className="bg-white border-b border-gray-200 hover:bg-green-50 transition">
              <td className="p-4">
                <img
                  src={image}
                  alt={title}
                  className="w-28 h-28 object-cover rounded-xl mx-auto shadow-md"
                />
              </td>
              <td className="p-4">
                <div className="font-semibold">{author}</div>
                <div className="text-gray-500 text-xs">{createdAt}</div>
              </td>
              <td className="p-4 font-bold text-green-800">{title}</td>
              <td className="p-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  {category}
                </span>
              </td>
              <td className="p-4 max-w-xs">
                <p className="line-clamp-2 text-gray-700">{description}</p>
              </td>
              <td className="p-4">
                <Link to={`/tipdetails/${_id}`}>
                  <button className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
                    See More
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TipCards;
