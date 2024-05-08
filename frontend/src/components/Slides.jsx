import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/slide/image1.jpg';
import image2 from '../assets/slide/image2.jpg';
import image3 from '../assets/slide/image3.jpg';
import image4 from '../assets/slide/image4.jpg';
import image5 from '../assets/slide/image5.jpg';

export default function Slides() {
  return (
    
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={2000}>
      
      <div className="relative">
        <img src={image2} alt="Slide 2" />
          <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left text-white">
            <h2 className="text-3xl sm:text-7xl font-extrabold font-serif">National Moon Day</h2>
            <p className="text-sm sm:text-xl mt-2 sm:mt-5 font-extrabold font-serif ">
              The General Assembly declared International Moon Day, a United Nations-designated international day to be observed annually on 20 July, in its resolution 76/76 on 
              “International cooperation in the peaceful uses of outer space” in 2021.
            </p>
          </div>
          <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left justify-end text-sky-500">
            <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold hidden sm:flex' />
            <div className='sm:flex gap-4 sm:gap-20 justify-end hidden'>
              <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Reference</a>
              <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Documentation</a>
              <a className='text-xs sm:text-xl mt-2 sm:mt-5'>More Information</a>
            </div>
          </div>
      </div>

      <div className="relative">
        <img src={image3} alt="Slide 3" />
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left text-white">
          <h2 className="text-3xl sm:text-7xl font-extrabold font-serif">Celebrating Earth Day</h2>
          <p className="text-sm sm:text-xl mt-2 sm:mt-5 font-extrabold font-serif">
            Ready for Earth Day on April 22? For more than 50 years, Earth Day has been celebrated every year on April 22. Earth Day isn't just to celebrate our planet and its 
            glory, but to emphasize protecting the environment and demonstrating the importance of planetary health.
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left justify-end text-red-600">
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold hidden sm:flex' />
          <div className='sm:flex gap-4 sm:gap-20 justify-end hidden'>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Reference</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Documentation</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>More Information</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={image1} alt="Slide 1" />
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left text-white">
          <h2 className="text-3xl sm:text-7xl font-extrabold font-serif">National Space Day</h2>
          <p className="text-sm sm:text-xl mt-2 sm:mt-5 font-extrabold font-serif">
            Space Day is a day of recognition of the wonders of space. On the first Friday in May, this event is held to inspire children about space travel, space exploration, and 
            the study of space - and how this can influence our understanding of the universe and our planet.
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left justify-end text-sky-500">
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold hidden sm:flex' />
          <div className='sm:flex gap-4 sm:gap-20 justify-end hidden'>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Reference</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Documentation</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>More Information</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={image4} alt="Slide 4" />
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left text-white">
          <h2 className="text-3xl sm:text-7xl font-extrabold font-serif">National Space Day</h2>
          <p className="text-sm sm:text-xl mt-2 sm:mt-5 font-extrabold font-serif">
            Space Day is a day of recognition of the wonders of space. On the first Friday in May, this event is held to inspire children about space travel, space exploration, and 
            the study of space - and how this can influence our understanding of the universe and our planet.
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left justify-end text-sky-500">
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold hidden sm:flex' />
          <div className='sm:flex gap-4 sm:gap-20 justify-end hidden'>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Reference</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Documentation</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>More Information</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={image5} alt="Slide 5" />
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left text-white">
          <h2 className="text-3xl sm:text-7xl font-extrabold font-serif">NASA's Boeing Crew Flight Test</h2>
          <p className="text-sm sm:text-xl mt-2 sm:mt-5 font-extrabold font-serif">
            NASA astronauts Butch Wilmore and Suni Williams will launch aboard Boeing's first crewed Starliner spacecraft mission to the International 
            Space Station no earlier than Monday, May 6
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col p-4 sm:p-20 text-left justify-end text-sky-500">
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold hidden sm:flex' />
          <div className='sm:flex gap-4 sm:gap-20 justify-end hidden'>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Reference</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>Documentation</a>
            <a className='text-xs sm:text-xl mt-2 sm:mt-5'>More Information</a>
          </div>
        </div>
      </div>

      </Carousel>
  </div>
  )
}