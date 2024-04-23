import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Astronomy from './pages/Astronomy';
import Mars from './pages/Mars';
import More from './pages/More';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/astronomy" element={ <Astronomy/> }/>
        <Route path="/mars" element={ <Mars/> }/>
        <Route path="/more" element={ <More/> }/>

      </Routes>
    </BrowserRouter>
  )
}