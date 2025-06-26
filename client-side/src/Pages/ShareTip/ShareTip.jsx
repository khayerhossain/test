import React, { useContext } from "react";
import submitImage from "../../assets/submit-image.jpg";
import { AuthContext } from "../../Providers/AuthContext";
import Swal from "sweetalert2";

const ShareTip = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("data from local site", data);
    // DB submission logic goes here
    fetch("http://localhost:3000/sharedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Tip Shared Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="w-full my-12 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center bg-white px-4 py-6">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-6xl border border-gray-200 ">
          {/* Left - Image */}
          <div className="md:w-1/2 w-full hidden md:block max-h-[450px]">
            <img
              src={submitImage}
              alt="Share Tip"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Form */}
          <div className="md:w-1/2 w-full p-6 sm:p-8 max-h-[450px] overflow-y-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">
              Share Your Garden Tip
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="topic"
                placeholder="Topic"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />

              <select
                name="difficulty"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
              >
                <option value="">Select Difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <textarea
                name="description"
                placeholder="Description"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2  resize-none"
              ></textarea>

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="category"
                placeholder="Category (e.g. Banana)"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="availability"
                placeholder="Availability (e.g. Seasonal)"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />

              <input
                type="email"
                name="email"
                value={user ? user.email : "user@example.com"}
                readOnly
                className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-500 focus:outline-none"
              />

              <input
                type="text"
                name="name"
                value={user ? user.displayName : "UserUndefine"}
                readOnly
                className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-500 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer"
              >
                Submit Tip
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareTip;
