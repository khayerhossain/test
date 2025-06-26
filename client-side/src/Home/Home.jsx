import React from 'react';
import Slider from '../Pages/Slider/Slider';
import { useLoaderData } from 'react-router';
import FeaturedGardeners from '../Pages/FeaturedGardeners/FeaturedGardeners';
import TrendingTips from '../Pages/TrendingTips/TrendingTips';
import Acordion from '../Pages/Acordion/Acordion';
import WinnerCards from '../Pages/WinnerCards/WinnerCards';

const Home = () => {
  const activeGardeners = useLoaderData();
  // console.log('Loaded gardeners:', activeGardeners);

  return (
    <div className=''>
      <Slider />
      <FeaturedGardeners active={activeGardeners} />
      <TrendingTips/>
      <WinnerCards/>
      <Acordion/>
    </div>
  );
};

export default Home;
