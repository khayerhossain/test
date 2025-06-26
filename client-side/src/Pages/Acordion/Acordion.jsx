import React from 'react';

const Acordion = () => {
  return (
    <section className="w-full my-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto bg-green-50 py-12 rounded-4xl">
      <h2 className="text-2xl font-bold text-center mb-10">Why Gardening is Worth It</h2>
      <div className="flex flex-col md:flex-row gap-8 h-full">

        {/* Left: 2xN Grid of Images */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2 h-full">
          <img
            src="https://i.ibb.co/VWmYGCz3/10-Ways-Garden-Mentorship-Programs-Can-Transform.jpg"
            className="rounded-lg h-40 lg:h-52 object-cover w-full shadow"
            alt="Gardening mentorship"
          />
          <img
            src="https://i.ibb.co/pBQH7KwH/Ready-to-start-your-own-small-garden-but-don-t.jpg"
            className="rounded-lg h-40 lg:h-52 object-cover w-full shadow"
            alt="Ready to start garden"
          />
          <img
            src="https://i.ibb.co/DfWLCQxN/Gardening-in-Sunshine-A-young-woman-dressed.jpg"
            className="rounded-lg h-40 lg:h-52 object-cover w-full shadow"
            alt="Gardening in sunshine"
          />
          <img
            src="https://i.ibb.co/xtV10Bjr/back-yard-gardening.jpg"
            className="rounded-lg h-40 lg:h-52 object-cover w-full shadow"
            alt="Backyard gardening"
          />
        </div>

        {/* Right: Accordion */}
        <div className="md:w-1/2 h-full flex flex-col justify-between space-y-4">
          <div className="collapse collapse-plus border border-gray-300 rounded-lg bg-white">
            <input type="radio" name="garden-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-lg cursor-pointer">
              Reduces Stress
            </div>
            <div className="collapse-content text-sm">
              Gardening brings peace of mind and significantly reduces stress. It’s great for mental health.
            </div>
          </div>

          <div className="collapse collapse-plus border border-gray-300 rounded-lg bg-white">
            <input type="radio" name="garden-accordion" />
            <div className="collapse-title font-semibold text-lg cursor-pointer">
              Great for Physical Health
            </div>
            <div className="collapse-content text-sm">
              Bending, lifting, watering — it's like a full cardio workout without going to the gym!
            </div>
          </div>

          <div className="collapse collapse-plus border border-gray-300 rounded-lg bg-white">
            <input type="radio" name="garden-accordion" />
            <div className="collapse-title font-semibold text-lg cursor-pointer">
              Fresh Food, Better Life
            </div>
            <div className="collapse-content text-sm">
              Growing your own fruits and vegetables means 100% safe, fresh, and tasty meals every day.
            </div>
          </div>

          <div className="collapse collapse-plus border border-gray-300 rounded-lg bg-white">
            <input type="radio" name="garden-accordion" />
            <div className="collapse-title font-semibold text-lg cursor-pointer">
              Teaches Kids Valuable Lessons
            </div>
            <div className="collapse-content text-sm">
              Getting kids involved in gardening helps them bond with nature and learn responsibility.
            </div>
          </div>

          <div className="collapse collapse-plus border border-gray-300 rounded-lg bg-white">
            <input type="radio" name="garden-accordion" />
            <div className="collapse-title font-semibold text-lg cursor-pointer">
              Builds Community
            </div>
            <div className="collapse-content text-sm">
              Community gardens strengthen neighborhood connections and create a positive local impact.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acordion;
