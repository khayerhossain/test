import React, { useEffect, useState } from "react";
import TipCards from "../TipCards/TipCards";

const TrendingTips = () => {
  const [trendingTipsData, setTrendingTipsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trendingtipsdata")
      .then((res) => res.json())
      .then((data) => {
        setTrendingTipsData(data);
      })
      .catch((err) => {
        console.error("Failed to fetch trending tips:", err);
      });
  }, []);

  const trendingTips = trendingTipsData.slice(0, 6);

  return (
    <div className="w-full my-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="bg-[#FFFAF0] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 min-h-[85vh]">
        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-800 mb-4">
          Trending Gardening Tips
        </h2>

        {/* Description */}
        <p className="text-center max-w-2xl mx-auto text-gray-700 text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10">
          These are the hottest tips shared by gardeners like you. Get inspired, try them out, and keep your garden thriving with trending ideas!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-1 sm:gap-3">
          {trendingTips.map((tip) => (
            <TipCards key={tip._id} data={tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTips;
