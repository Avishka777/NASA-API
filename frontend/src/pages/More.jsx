import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import logo from '../assets/logo.png';
export default function More() {
  
  return (
    <div className="p-20 shadow-xl">
      
      <div className="flex items-center justify-center mb-20">
        <img src={logo} className=" h-48 sm:h-48" alt="Company Logo" />
        <span className="text-5xl my-auto text-sky-600 font-extrabold font-serif">Browse APIs</span>
      </div>

      <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">APOD | Astronomy Picture of the Day</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. 
          It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. 
          In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated 
          hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">Asteroids NeoWs |  Near Earth Object Web Service</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their 
          closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">DONKI | Database Of Notifications, Knowledge, Information</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          The Space Weather Database Of Notifications, Knowledge, Information (DONKI) is a comprehensive on-line tool for space weather forecasters, scientists, and the general 
          space science community. DONKI chronicles the daily interpretations of space weather observations, analysis, models, forecasts, and notifications provided by the Space 
          Weather Research Center (SWRC), comprehensive knowledge-base search functionality to support anomaly resolution and space science research, intelligent linkages, 
          relationships, cause-and-effects between space weather activities and comprehensive webservice API access to information stored in DONKI.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">EPIC | Earth Polychromatic Imaging Camera</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun 
          Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 
          pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">Earth | Unlock the significant public invesment in earch observation data</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total 
          annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value 
          is derived from consumers use of the data. The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide. There are more 
          complicated APIs available if you want to build models on top of satellite imagery, apply machine-learning, or minimize clouds in your image. NASA's Earth Science 
          Devision has a variety of Earth imagery APIs for developers, which you can find out about in the Earthdata Developer Portal. Specifically, the GIBS (Global Imagery 
          Browse Services) API may be of interest. The Google Earth Engine API is another powerful option. This API is powered by Google Earth Engine API, and currently only 
          supports pan-sharpened Landsat 8 imagery.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-full bg-gray-400 rounded-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">EONET | Earth Observatory Natural Event Tracker</Typography>
        <hr className="my-2 border-t-2 border-red-800"/>
        <Typography>
          One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. 
          It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. 
          In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated 
          hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  </div>
  
);
}