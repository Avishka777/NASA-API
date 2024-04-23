import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from '../components/Slides';
import News from '../components/News';

export default function Home() {
  return (

    <div>
      <Slides />
      <News />

    </div>
  );
}