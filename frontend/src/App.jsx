import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Astronomy from './pages/Astronomy';
import Mars from './pages/Mars';
import More from './pages/More';
import Footers from './components/Footer';
import SignUp from './pages/SignUp';
import Signin from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/astronomy" element={ <Astronomy/> }/>
        <Route path="/mars" element={ <Mars/> }/>
        <Route path="/more" element={ <More/> }/>
        <Route path="/sign-up" element={ <SignUp/> }/>
        <Route path="/sign-in" element={ <Signin/> }/>

      </Routes>
    <Footers />
    </BrowserRouter>
  )
}