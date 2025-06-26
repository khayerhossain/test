import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BiSolidLike} from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";


const TipDetails = () => {
  const data = useLoaderData();
  const { _id } = useParams();
  const [details, setDetails] = useState(null); 

  useEffect(() => {
    const tipDetails = data.find((item) => item._id === _id); 
    setDetails(tipDetails);
  }, [data, _id]);

  return (
   <div className=''>
     <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row 
    gap-6  my-0 lg:my-14 border">
      {/* Left: Image */}
      <div className="md:w-1/2">
        <img
          src={details?.image}
          alt={details?.title}
          className="w-full h-auto lg:h-[360px] object-cover rounded-lg"
        />
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 ">
          {details?.title}
        </h2>
        <div className="text-sm ">
          By <span className="font-medium">{details?.author}</span>  {details?.date}
        </div>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
          {details?.category}
        </span>
        <p className="text-gray-700">{details?.description}</p>

     <div className='flex flex-col md:flex-row gap-5'>
           {/* What to do */}
        <div>
          <h3 className="text-md font-semibold text-green-600 mb-1"> How to Care for Plants</h3>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {details?.whatToDo?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* What not to do */}
        <div>
          <h3 className="text-md font-semibold text-red-600 mb-1 mt-4 lg:mt-0"> What to Avoid</h3>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {details?.whatNotToDo?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
     </div>
         {/* react Buttons */}
     <div className='flex justify-around'>
        <button className=" btn mt-4 px-5 py-2 bg-base-100 rounded-lg hover:opacity-90 transition">
          <BiSolidLike size={28}/>
          <p>{details?.totalLiked}</p>
        </button>
        <button className="btn mt-4 px-5 py-2 bg-base-100 rounded-lg hover:opacity-90 transition">
          <FaCommentAlt size={24} />
          <p>25</p>
        </button>
        <button className="btn mt-4 px-5 py-2 bg-base-100 rounded-lg hover:opacity-90 transition">
          <FaShareSquare size={26} />
          <p>10</p>
        </button>
     </div>
      </div>
    </div>
   </div>
  );
};

export default TipDetails;
