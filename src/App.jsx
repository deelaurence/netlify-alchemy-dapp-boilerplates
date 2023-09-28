import { useState } from 'react'
import './App.css'
import Details from './components/Details';
import Team from './components/Team';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import AboutUs from './components/AboutUs';
import AllProjects from './components/AllProjects';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';
import { useEffect, useRef } from 'react';
import Manager from './components/Manager';

// import { ScrollTrigger } from 'gsap/ScrollTrigger'
function App() {
  // gsap.registerPlugin(S)
  const [currentLocation, setCurrentLocation] = useState('')
  const [imgLoaded, setImageLoaded] = useState(false)
  
  const pullData = ((data) => {
    //(data);
  useEffect(()=>{
    const timeoutId= setTimeout(()=>{
       setImageLoaded(data)
      },100)
      return ()=>{
        clearTimeout(timeoutId)
      }
    },[data])
  }) 
  return (
    <Router>
      <ScrollToTop />
      {imgLoaded ?
        <div className='bg-lightShade  absolute-parent'>
          <Navbar locationProps={location} />
          <Routes>
            <Route path="/" key={document.location.href} element={<LANDING />} />
            <Route path="/team" key={document.location.href} element={<Team />} />
            <Route path="/menu" key={document.location.href} element={<Menu />} />
            <Route path="/manager" key={document.location.href} element={<Manager />} />
            <Route path="/about" key={document.location.href} element={<AboutUs />} />
            <Route path="/project-link" key={document.location.href} element={<Details />} />
            <Route path="/all-projects/project-link" key={document.location.href} element={<Details />} />
            <Route path="/all-projects" key={document.location.href} element={<AllProjects/>} />
          
          </Routes>
          < Footer locationProps={location} />
        </div>
        :
        <Preloader pullData={pullData} />
      }
    </Router>
  )
}

export default App
