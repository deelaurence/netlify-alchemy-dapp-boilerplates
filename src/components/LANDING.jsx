import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {HiOutlineArrowLongRight} from 'react-icons/hi2'

import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/landing';
import vlcVideo from "../assets/vlc.mp4"
import kickz from '../assets/Kickz.webm'
import Title from './Title';
import roof from "../assets/webp/wooden-roof.webp"
import landing from "../assets/webp/cover.webp"


import bulltooth from "../assets/webp/bulltooth.webp"


import cover from "../assets/webp/landing.webp"
import projectData from '../data/projects';
import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'
import Section from './Section';
import sectionData from '../data/sections';
import TextnCard from './TextnCard';


const LANDING = () => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const [slide, setSlide] = useState(1)
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const heroRef = useRef(null)
  const hero = heroRef.current
  
  
  // state={
  //   slideIndex:0,
  //   updateCount:0
  // }
  const settings2 = {
    
    dots:true,
    dotsClass:"slick-dots slick-thumb",
    arrows:true,
    pauseOnHover:true,
    // autoplay:true,
    speed:1000,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    beforeChange:(next)=>{
      const adjustNext=next+1
      if(next<2){
        setSlide(adjustNext+1)
      }
      else{
        setSlide(1)
      }
    }
  }

  let slideState;

  
  return (
    <>
      <section ref={heroRef} className='mt-20 overflow-hidden px-6 sm:px-16 '>
       
        <div className='flex items-center justify-center h-[50vh]'>
          <div>
            <h1 className='text-4xl font-extrabold'>ONICON<span className='font-thin'> NIGERIA.</span> </h1>
            <h2>CRAFTING REALITIES &mdash; BUILDING DREAMS</h2>
          </div>
        </div>

        <img  className='' src={landing}  alt="" />

      </section>
      <section className='px-6 sm:px-16 mt-16'>
        <Title data='You deserve top tier engineering.'/>
        <Section data={sectionData[0]}/>
        <Section data={sectionData[1]}/>
      </section>
   
        <section className='mt-32 px-6 sm:px-16'>
        <Title data="Portfolio"/>
        <Slider dots={true} className=' mt-12 sm:w-1/2 h-[400px]' {...settings2}>
          <Link to="/all-projects/?category=building">
          <div>
              <p className='pl-6 pt-24 pb-1  pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Building.</p>
              <img src={cover} alt="" />
          </div>
          </Link>
          <Link to='/all-projects/?category=civil'>
          <div>
              <p className='pl-6 pt-24 pb-1 pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Civil Engineering</p>
              <img className='' src={bulltooth} alt="" />
          </div>
        </Link>
        <Link to="/all-projects/?category=water">
          <div>
              <p className='pl-6 pt-24 pb-1 pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Water / Boreholes.</p>
              <img className='' src={roof} alt="" />
          </div>
        </Link>
        </Slider>
        <div className='flex mt-3 items-center justify-between'>
          <div className='font-semibold text-xl'>
            ({slide}/3)
          </div>
          
            <HiOutlineArrowLongRight className='scroll text-3xl'/>
            <div className='flex gap-4  items-center justify-end [&>*]:h-5 [&>*]:w-5 [&>*]:rounded-full [&>*]:border-darkShade [&>*]:border-2'>
            <div className={slide==1?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==2?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==3?'bg-darkShade duration-500':"duration-500"}></div>
          </div>
        </div>
     </section>

     <section className='mt-16 px-6 sm:px-16'>
      
      <Title data="PROJECTS"/>
      <Section data={sectionData[2]}/>
      
      {
        projectData.slice(0,3).map((data,index)=>{
          
            return(
              <TextnCard key={index} tag={data.tag} image={data.image} text={data.text} link={data.link} />
              )
            })

      }
      
      <Link to="all-projects">More</Link>
     
     </section>
    </>
  )
}

export default LANDING
