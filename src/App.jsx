import { useState } from 'react'
import './App.css'
import Details from './components/Details';
import Team from './components/Team';

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import AllProjects from './components/AllProjects';
import KODETECH from './components/KODETECH';
import Alertz from './components/Alertz';
import MixedR from './components/MixedR';
import Guild from './components/Guild'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'
import WhoIsFlo from './components/WhoIsFlo';
import Footer from './components/Footer';

import Playground from './components/Playground';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useRef } from 'react';

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
            <Route path="/guild" key={document.location.href} element={<Guild />} />
            <Route path="/team" key={document.location.href} element={<Team />} />
            <Route path="/menu" key={document.location.href} element={<Menu />} />
            <Route path="/project-link" key={document.location.href} element={<Details />} />
            <Route path="/all-projects/project-link" key={document.location.href} element={<Details />} />
            <Route locationProps={location} path="/kodetech" key={document.location.href} element={<KODETECH />} />
            <Route locationProps={location} path="/alertz" key={document.location.href} element={<Alertz />} />
            <Route locationProps={location} path="/mr" key={document.location.href} element={<MixedR />} />
            <Route path="/playground" key={document.location.href} element={<Playground />} />
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
