import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import News from '../components/News';
import Slides from '../components/Slides';
import Discover from '../components/Discover';
import earthday from '../assets/earthday.jpg';

export default function Home() {
  return (

    <div>
      <Slides />
      <News />
      <div className='rounded-lg p-20'>
          <h1 className='text-2xl sm:text-4xl font-serif text-center mb-5'>Global Events</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
          <img src={earthday} alt="card-image" className='w-full h-auto rounded-3xl mt-10' />
      </div>
      <Discover />
    </div>
  );
}