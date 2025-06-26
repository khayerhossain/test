import React from 'react';
import sliderImage1 from '../../assets/slider-1.jpg';
import sliderImage2 from '../../assets/slider3.jpg';
import sliderImage3 from '../../assets/slider4.jpg';
import sliderImage4 from '../../assets/slider-6.jpg';
import Typewriter from '../TypeWriter/TypeWriter';

const Slider = () => {
  return (
    <div className="w-full my-12 px-4 md:px-8 lg:px-16 mx-auto">
      {/* Carousel Slides */}
      <div className="carousel w-full rounded-box">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6 text-center md:text-left space-y-4">
            <p className="text-green-800 uppercase font-semibold tracking-widest">Upcoming Event</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <Typewriter text="Home Garden Design Fair 2025" speed={100} />
            </h2>          
            <p className="text-gray-600">
              Join our annual garden design event! Discover the latest trends in home plant styling and eco-friendly setups.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">
              Join Now 
            </button>
          </div>
          <img
            src={sliderImage1}
            alt="Slide 1"
            className="w-full max-w-[600px] h-auto md:h-[350px] object-cover rounded-box mx-auto"
          />
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6 text-center md:text-left space-y-4">
            <p className="text-green-800 uppercase font-semibold tracking-widest">Indoor Special</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <Typewriter text="Indoor Greenery Showcase" speed={100} />
            </h2>
            <p className="text-gray-600">
              Explore creative plant arrangements and interior-friendly plant options to refresh your space.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">
              View Showcase
            </button>
          </div>
          <img
            src={sliderImage2}
            alt="Slide 2"
            className="w-full max-w-[600px] h-auto md:h-[350px] object-cover rounded-box mx-auto"
          />
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6 text-center md:text-left space-y-4">
            <p className="text-green-800 uppercase font-semibold tracking-widest">Succulent Workshop</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <Typewriter text="Succulent DIY Crafting" speed={100} />
            </h2>
            <p className="text-gray-600">
              Learn how to design your own mini succulent gardens — perfect for busy folks who still want greenery.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">
              Join Workshop
            </button>
          </div>
          <img
            src={sliderImage3} 
            alt="Slide 3"
            className="w-full max-w-[600px] h-auto md:h-[350px] object-cover rounded-box mx-auto"
          />
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6 text-center md:text-left space-y-4">
            <p className="text-green-800 uppercase font-semibold tracking-widest">Trending Now</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <Typewriter text="Outdoor Garden Expo" speed={100} />
            </h2>
            <p className="text-gray-600">
              Check out the latest in stylish plant containers and how they can match your garden aesthetic.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">
              Explore Expo
            </button>
          </div>
          <img
            src={sliderImage4}
            alt="Slide 4"
            className="w-full max-w-[600px] h-auto md:h-[350px] object-cover rounded-box mx-auto"
          />
        </div>

      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-2 py-4">
        <a href="#slide1" className="btn btn-xs">1</a>
        <a href="#slide2" className="btn btn-xs">2</a>
        <a href="#slide3" className="btn btn-xs">3</a>
        <a href="#slide4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Slider;
