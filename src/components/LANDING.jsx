import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {HiArrowLongRight, HiOutlineArrowLongRight} from 'react-icons/hi2'

import { Link } from 'react-router-dom';
import Title from './Title';
import landing from "../assets/webp/cover.webp"
import waterTank from "../assets/webp/water-tank.jpg"

import bulltooth from "../assets/webp/bulltooth.webp"


import cover from "../assets/webp/landing.webp"
import projectData from '../data/projects';
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
  
  
  const settings2 = {
    
    dots:true,
    dotsClass:"slick-dots slick-thumb",
    arrows:true,
    pauseOnHover:true,
    autoplay:true,
    speed:3000,
    autoplaySpeed:10000,
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
      <section ref={heroRef} className='mt-20 relative overflow-hidden px-6 sm:px-16 '>
       
        <div className='flex relative  items-center justify-center h-[40vh] sm:h-[80vh]'>
        {/* <div className='absolute h-full w-full bg-white opacity-50'></div> */}
          <div className='relative'>
            <h1 className=' text-6xl mb-6 sm:text-8xl leading-[0px] pt-4 font-extrabold'>ONICON<span className='font-thin text-4xl'> RESOURCES.</span> </h1>
            <h2 className=''>CRAFTING REALITIES &mdash; BUILDING DREAMS</h2>
            
          </div>
        </div>
        <img  className=' z-0' src={landing}  alt="" />


      </section>
      <section className='px-6 sm:px-16 mt-16'>
        <Title style="bg-orange-400 font-medium overflow-visible pb-2 text-5xl" data='You deserve top tier engineering.'/>
        <Section data={sectionData[0]}/>
        <Section data={sectionData[1]}/>
      </section>
   
      <section className='mt-32  px-6  sm:px-16'>
        <Title data="Portfolio"/>
        <div className='flex flex-col sm:flex-row gap-4'>  
        <div className='sm:w-1/2'>
          <Section data={sectionData[3]}/>
          <Section data={sectionData[slide+3]}/>
        </div>
       <div className='sm:w-1/2'>
        <Slider dots={true} className='mt-12  h-[400px]' {...settings2}>
          
          <div>
              <p className='pl-6 pt-24 pb-1  pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Building.</p>
              <img src={cover} alt="" />
          </div>
          <div>
              <p className='pl-6 pt-24 pb-1 pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Civil Engineering</p>
              <img className='' src={bulltooth} alt="" />
          </div>
          <div>
              <p className='pl-6 pt-24 pb-1 pr-1 opacity-75 bg-darkShade text-lightShade z-[999] absolute text-3xl'>Water / Boreholes.</p>
              <img className='' src={waterTank} alt="" />
          </div>
         </Slider>
        <div className='flex mt-3 items-center justify-between'>
          <div className='font-semibold text-xl'>
            ({slide}/3)
          </div>
          
            Swipe  <HiOutlineArrowLongRight className='scroll text-3xl'/>
            <div className='flex gap-4  items-center justify-end [&>*]:h-5 [&>*]:w-5 [&>*]:rounded-full [&>*]:border-darkShade [&>*]:border-2'>
            <div className={slide==1?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==2?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==3?'bg-darkShade duration-500':"duration-500"}></div>
          </div>
        </div>
        </div>
        </div>
     </section>

     <section className='mt-16 px-6 sm:px-16'>
      
      <Title data="PROJECTS"/>
      <Section data={sectionData[2]}/>
      <div className='sm:flex flex-wrap  gap-[2%] [&>*]:w-[49%]   '>
      {
        projectData.slice(0,4).map((data,index)=>{
          
          return(
            
            <TextnCard key={index} tag={data.tag} image={data.image} text={data.title} subtext={data.tag} link={data.link} />
            )
          })
          
        }
        </div>
      
      <Link className='mt-12 block text-2xl' to="all-projects">Explore More<HiArrowLongRight className='bg-green-400 text-3xl float-right  rounded-full'/></Link>
     
     </section>
    </>
  )
}

export default LANDING
