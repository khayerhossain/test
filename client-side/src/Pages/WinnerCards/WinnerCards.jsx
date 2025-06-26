import React from 'react';
import { FaAward } from "react-icons/fa6";

const winners = [
  {
    name: "Maya Scholten",
    title: "Creative Concept Winner",
    age: 29,
    status: "Active",
    experience: "4 years",
    description: "Awarded for her unique vision of reusing old wheelbarrows in art installations.",
    image: "https://i.ibb.co/jdjptRw/Maak-van-een-oude-kruiwagen-of-bolderkar-een.jpg",
  },
  {
    name: "Maisha Rahman",
    title: "Skincare Innovation Award",
    age: 32,
    status: "Active",
    experience: "6 years",
    description: "Recognized for developing salicylic acid wipes with maximum impact and minimal irritation.",
    image: "https://i.ibb.co/vRZ8xL5/0b2f2810-01dd-48eb-b4ae-6eac2b764b35.jpg",
  },
  {
    name: "Clara Johansson",
    title: "Photo Storytelling Master",
    age: 27,
    status: "Active",
    experience: "5 years",
    description: "Captured powerful emotions through minimalist outdoor photography.",
    image: "https://i.ibb.co/BVycCgx9/ddafcf32-90bd-4b17-bbe2-40b7e3e60aca.jpg",
  },
  {
    name: "Lucas Vermeer",
    title: "Best Urban Capture",
    age: 30,
    status: "Active",
    experience: "7 years",
    description: "Snapped a stunning angle of city life in motion, full of narrative and timing.",
    image: "https://i.ibb.co/rRKnkz7C/ed42490b-5ff6-4b1a-9de2-d849895adb61.jpg",
  },
  {
    name: "Emily Chen",
    title: "Innovation Champion",
    age: 26,
    status: "Active",
    experience: "3 years",
    description: "Honored for her eco-friendly packaging design that reduces waste significantly.",
    image: "https://i.ibb.co/LD0qDLRf/e6df02b3-ae7f-44de-af15-10a790a30021.jpg",
  },
  {
    name: "Rafiq Khan",
    title: "Tech Creativity Prize",
    age: 34,
    status: "Active",
    experience: "8 years",
    description: "Awarded for integrating AI to analyze and sort thousands of user reviews.",
    image: "https://i.ibb.co/DfcQ1PPW/download.jpg",
  },
];

const WinnerCards = () => {
  return (
   <section className='w-full my-12 px-4 md:px-8 lg:px-16'>
     <section className="py-12 bg-[#03373D] rounded-4xl">
      <div className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Last Event Winners
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Celebrating the brilliant minds and their standout achievements in our most recent event.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={winner.image}
                alt={winner.name}
                className="w-full h-56 object-cover object-top"
              />

              {/* Card Body */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">{winner.name}</h3>

                {/* Title Badge */}
                <p className="text-sm bg-yellow-200 text-yellow-800 font-medium rounded-full inline-flex items-center gap-2 px-3 py-1 mb-3">
                  <FaAward /> {winner.title}
                </p>

                {/* Details */}
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li><span className="font-semibold">Age:</span> {winner.age}</li>
                  <li><span className="font-semibold">Status:</span> {winner.status}</li>
                  <li><span className="font-semibold">Experience:</span> {winner.experience}</li>
                </ul>

                {/* Description */}
                <p className="text-sm text-gray-700 italic">
                  {winner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </section>
  );
};

export default WinnerCards;
