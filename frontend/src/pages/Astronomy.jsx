import React, { useState, useEffect } from 'react';
import { Label, Button } from 'flowbite-react';
export default function Astronomy() {
  const [photoData, setPhotoData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [error, setError] = useState('');
  useEffect(() => {
    fetchPhoto(selectedDate);
  }, []);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDate) {
      fetchPhoto(selectedDate);
    } else {
      setError('Please select a date');
    }
  };
  async function fetchPhoto(date) {
    setError('');
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=tMfdGz37Ta0SE7RrlyoWNyM0HFQ5uDbNpa7BFL9d&date=${date}`
      );
      const data = await res.json();
      setPhotoData(data);
    } catch (error) {
      setError('Error fetching data from NASA API');
      console.error(error);
    }
  }
  function getTodayDateString() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return (
    <div className='p-10'>
      {error && <div>{error}</div>}
      {photoData && (
        <div className='flex flex-col md:flex-row items-start'>
          {photoData.media_type === 'image' ? (
            <img src={photoData.url} alt={photoData.title} className='max-w-full md:max-w-screen-sm md:max-h-screen rounded-3xl' />
          ) : (
            <iframe title='space-video' src={photoData.url} gesture='media' className='photo' allowFullScreen />
          )}
          <div className='mt-6 md:ml-10'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <Label htmlFor='dateInput' className='mr-2 text-sky-600 font-bold text-xl'>Select Date :</Label>
                <input id='dateInput' type='date' value={selectedDate} onChange={handleDateChange} className='px-2 py-1 border border-gray-300 rounded-md mr-2 w-full md:w-60 h-10' />
                <Button gradientDuoTone='purpleToBlue' type='submit' className=''>Search</Button>
              </div>
            </form>
            <div className='mt-6'>
              <span className='text-3xl font-semibold'>{photoData.title}</span>
              <hr className='my-2 border-2 border-red-800 font-bold' />
              <p className='text-lg font-semibold text-zinc-700'>{photoData.date}</p>
              <br />
              <p className="text-lg font-semibold text-zinc-500">{photoData.explanation}</p>
              <br />
              <p className='mt-5 text-sm font-serif text-sky-700'>View HD Image : <a href={photoData.hdurl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{photoData.hdurl}</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}