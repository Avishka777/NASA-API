import React from 'react';
import { Card, CardHeader,CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button } from 'flowbite-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image10 from '../assets/news/image10.jpg';
import image11 from '../assets/news/image11.jpg';
import image12 from '../assets/news/image12.jpg';
import image13 from '../assets/news/image13.jpg';

export default function News() {
  
    return (
      <div>
        <div className='p-20 sm:p-20'>
          <h1 className='text-2xl sm:text-4xl font-serif text-center mb-5'>Latest News</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
        
          <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 mx-auto justify-center p-0'>

            <Card className="mt-8 sm:w-96">
            <CardHeader color="blue-gray" className="relative rounded-xl mt-4">
              <img src={image10} alt="card-image" className='w-full h-auto' />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="text-lg mb-2">Earth and Climate Change</Typography>
              <Typography className="text-sm sm:text-base">
                NASA has selected six new airborne missions that include domestic and international studies of fire-induced clouds, Arctic coastal change, air quality, landslide... 
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button gradientDuoTone='purpleToBlue'>Read More</Button>
            </CardFooter>
            </Card>

            <Card className="mt-8 sm:w-96">
            <CardHeader color="blue-gray" className="relative rounded-xl mt-4">
              <img src={image11} alt="card-image" className='w-full h-auto' />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="text-lg mb-2">AI for Earth</Typography>
              <Typography className="text-sm sm:text-base">
                As extreme weather events increase around the world due to climate change, the need for further research into our warming planet has increased as well For NASA climate researc... 
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button gradientDuoTone='purpleToBlue'>Read More</Button>
            </CardFooter>
            </Card>

            <Card className="mt-8 sm:w-96">
            <CardHeader color="blue-gray" className="relative rounded-xl mt-4">
              <img src={image12} alt="card-image" className='w-full h-auto' />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="text-lg mb-2">Bright Galactic and Stellar Duo</Typography>
              <Typography className="text-sm sm:text-base">
                This image from the NASA/ESA Hubble Space Telescope features NGC 3783, a bright barred spiral galaxy about 130 million light-years from Earth that also lends its name to the...
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button gradientDuoTone='purpleToBlue'>Read More</Button>
            </CardFooter>
            </Card>

            <Card className="mt-8 sm:w-96">
            <CardHeader color="blue-gray" className="relative rounded-xl mt-4">
              <img src={image13} alt="card-image" className='w-full h-auto' />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="text-lg mb-2">Fully Loaded First Sol</Typography>
              <Typography className="text-sm sm:text-base">
              Curiosity continues to make progress along the margin of upper Gediz Vallis ridge, investigating the broken bedrock in our workspace and acquiring images of the ridge deposit as... 
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button gradientDuoTone='purpleToBlue'>Read More</Button>
            </CardFooter>
            </Card>
  
        </div>
      </div>
    </div>
  )
}