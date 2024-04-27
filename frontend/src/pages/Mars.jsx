import React, { useState, useEffect } from 'react';
import { Label, Button } from 'flowbite-react';
export default function Mars() {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState('curiosity'); // Default rover is Curiosity
  const [camera, setCamera] = useState(''); // Default camera is empty (no filter)
  const [error, setError] = useState('');
  useEffect(() => {
    fetchPhotos(rover, camera);
  }, [rover, camera]); // Fetch photos whenever the rover or camera changes
  const fetchPhotos = async (rover, camera) => {
    setError('');
    try {
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?api_key=tMfdGz37Ta0SE7RrlyoWNyM0HFQ5uDbNpa7BFL9d&date`;
      if (camera) {
        url += `&camera=${camera}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setPhotos(data.latest_photos);
      console.log(data.latest_photos);
    } catch (error) {
      setError('Error fetching photos from NASA API');
      console.error(error);
    }
  };
  const handleRoverChange = (event) => {
    setRover(event.target.value);
  };
  const handleCameraChange = (event) => {
    setCamera(event.target.value);
  };
  return (
    <div className="p-10 ">
      <form>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0 px-10">
          <Label htmlFor="roverSelect" className="text-sky-600 font-bold text-xl">
            Select Rover :
          </Label>
          <select
            id="roverSelect"
            value={rover}
            onChange={handleRoverChange}
            className="px-2 py-1 border border-gray-300 rounded-md w-full md:w-60 h-10"
          >
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
          <Label htmlFor="cameraSelect" className="text-sky-600 font-bold text-xl">
            Select Camera :
          </Label>
          <select
            id="cameraSelect"
            value={camera}
            onChange={handleCameraChange}
            className="px-2 py-1 border border-gray-300 rounded-md w-full md:w-60 h-10"
          >
            <option value="">All Cameras</option>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mahli">Mars Hand Lens Imager</option>
            <option value="navcam">Navigation Camera</option>
          </select>
          <Button gradientDuoTone="purpleToBlue" type="button" onClick={() => fetchPhotos(rover, camera)}>
            Search
          </Button>
        </div>
      </form>

      {error && <div>{error}</div>}
      <div className="mt-5">
        {photos.map((photo) => (
          <div key={photo.id} className="px-10">
            <div className='flex flex-col md:flex-row'>
              <img src={photo.img_src} alt={photo.id} className="max-w-full md:max-w-screen-sm md:max-h-screen rounded-3xl mb-6 md:mb-0" />
              <div className='md:ml-10'>
                <span className='text-3xl font-semibold'>ROVER DETAILS</span>
                <hr className='my-2 border-2 border-red-800 font-bold' />
                <p className="text-lg font-semibold text-zinc-500">Rover ID : {photo.camera.rover_id}</p>
                <p className="text-lg font-semibold text-zinc-500">Rover Name : {photo.rover.name}</p>
                <p className="text-lg font-semibold text-zinc-500">Rover Launch Date : {photo.rover.launch_date}</p>
                <p className="text-lg font-semibold text-zinc-500">Rover Landing Date : {photo.rover.landing_date}</p>
                <p className="text-lg font-semibold text-zinc-500 mb-5">Rover Status: {photo.rover.status}</p>
                <span className='text-3xl font-semibold'>CAMERA INFO</span>
                <hr className='my-2 border-2 border-red-800  font-bold' />
                <p className="text-lg font-semibold text-zinc-500">Camera Short Name : {photo.camera.name}</p>
                <p className="text-lg font-semibold text-zinc-500 mb-5">Camera Full Name : {photo.camera.full_name}</p>
                <span className='text-3xl font-semibold'>MORE...</span>
                <hr className='my-2 border-2 border-red-800 font-bold' />
                <p className="text-lg font-semibold text-zinc-500">Earth Date: {photo.earth_date}</p>
                <p className=' text-lg text-zinc-500'>View HD Image : <a href={photo.img_src} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{photo.img_src}</a></p>
              </div>
            </div><hr className="my-10 border-t-2 border-gray-400"/>
          </div>
        ))}
      </div>
    </div>
  );
}