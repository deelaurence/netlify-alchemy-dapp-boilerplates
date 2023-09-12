import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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

import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'
import Section from './Section';
import sectionData from '../data/sections';


const LANDING = () => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const [slide, setSlide] = useState(1)
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const heroRef = useRef(null)
  const hero = heroRef.current
  
  const settings = {
    autoplay:true,
    speed:4000,
    fade:true,
    dots:true,
    arrows:true,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
   
  }
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
    speed:2000,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    beforeChange:(next)=>{
      console.log(next);
      setSlide(next+1)
    }
  }

  let slideState;

  
  // if(slide==1){
  //    slideState='flex [&>*]:w-[33.3%] w-[300vw] -translate-x-[0%] opacity-[0.5] duration-[1s]'
  //   }
  //   else if(slide==2){
  //   slideState='flex [&>*]:w-[33.3%] w-[300vw] -translate-x-[33.3%] duration-[1s]'
  // }
  // else{
  //   slideState='flex [&>*]:w-[33.3%] w-[300vw] -translate-x-[66.6%] duration-[1s]'
  // }

  // useEffect(()=>{
  //  const interval = setInterval(()=>{
  //    setSlide(slide+1)
  //     if(slide==3){
  //       setSlide(1)
  //     }
  //     console.log(slide)
  //   },2200)
  //     return ()=> clearInterval(interval)
  // })
  // useEffect(() => {
  //   //("run effect landing")
  //   setCurrentLocation(location)
  //   gsap.fromTo(hero, {
  //     yPercent: 40,
  //     opacity: 0,
  //     skewX: "9deg",
  //     // scale: 5,
  //   },
  //     {
  //       skewX: "0deg",
  //       // scale: 1,
  //       yPercent: 0,
  //       opacity: 1,
  //       duration: 1.5,
  //       delay: 1,
  //       // ease: "Bounce.easeOut"

  //       // scrollTrigger: {
  //       //   trigger: hero,
  //       //   scrub: "true"
  //       // }
  //     })
  //   // gsap.fromTo(refs.current[0], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     skewX: "0deg",
  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     delay: 1,
  //   //     // ease: "Bounce.easeOut",
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[0],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[0], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: 3,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[0],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[0], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"
  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       duration: 1,
  //       delay: 1,
  //       // ease: "Bounce.easeOut",
  //       scrollTrigger: {
  //         trigger: refs.current[0],
  //       }
  //     })


  //   // gsap.fromTo(refs.current[1], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"

  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     skewX: "0deg",

  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     delay: 2.5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[0],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[1], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: .5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[0],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[1], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       duration: 1,
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[0],
  //       }
  //     })
  //   // gsap.fromTo(refs.current[2], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"

  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     skewX: "0deg",
  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[2],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[2], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: .5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[1],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[2], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       delay: .8,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[2],
  //       }
  //     })
  //   // gsap.fromTo(refs.current[3], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"

  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     skewX: "0deg",

  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[3],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[3], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: .5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[3],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[3], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       delay: 1,
  //       opacity: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[3],
  //       }
  //     })
  //   // gsap.fromTo(refs.current[4], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"

  //   // },
  //   //   {
  //   //     yPercent: 0,

  //   //     skewX: "0deg",
  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[4],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[4], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: .5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[4],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[4], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,

  //       skewX: "0deg",
  //       opacity: 1,
  //       delay: 1.2,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[4],
  //       }
  //     })
  //   // gsap.fromTo(refs.current[5], {
  //   //   yPercent: 20,
  //   //   opacity: 0,
  //   //   skewX: "4deg"

  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     skewX: "0deg",

  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[5],
  //   //     }
  //   //   })
  //   // gsap.fromTo(refs2.current[5], {
  //   //   yPercent: 20,
  //   //   opacity: 0
  //   // },
  //   //   {
  //   //     yPercent: 0,
  //   //     duration: 1.2,
  //   //     opacity: 1,
  //   //     delay: .5,
  //   //     scrollTrigger: {
  //   //       trigger: refs.current[5],
  //   //     }
  //   //   }
  //   // )
  //   gsap.fromTo(refs3.current[5], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       delay: 1.5,
  //       opacity: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[5],
  //       }
  //     })


  // }, [])
  // useEffect(() => {
  //   setCurrentLocation(location)
  //   gsap.fromTo(hero, {
  //     opacity: 0,
  //   },
  //     {
  //       skewX: "0deg",
  //       // scale: 1,
  //       opacity: 1,
  //       duration: 1,

  //       // scrollTrigger: {
  //       //   trigger: refs.current[0],
  //       //   // scrub: "true"
  //       // }
  //     })


  // }, [currentLocation])
  return (
    <>
      <section ref={heroRef} className='mt-20 overflow-hidden px-6 sm:px-16 '>
       
        <div className='flex items-center justify-center h-[50vh]'>
          <div>
            <h3 className='text-4xl font-extrabold'>ONI<span className='font-thin'>CON.</span> </h3>
            <p>CRAFTING REALITIES &mdash; BUILDING DREAMS</p>
          </div>
        </div>

        <img src={landing}  alt="" />

      </section>
      <section className='px-6 sm:px-16 mt-16'>
        <Title data='A buiding construction company.'/>
        <Section data={sectionData[0]}/>
        <Section data={sectionData[1]}/>
      </section>
     <Slider dots={true} className='mx-6 sm:px-16 mt-12 sm:w-1/2 h-[450px]' {...settings}>
          <div >
          <img className='' src={roof} alt="" />
          </div>
          <div>
          <img className='' src={bulltooth} alt="" />
          </div>
          <div>
          <img src={cover} alt="" />
          </div>
     </Slider>

     <section className='mt-32 px-6 sm:px-16'>
        <Title data="AWARDS"/>
     </section>
     <section className='mt-32 px-6 sm:px-16'>
        <Title data="Portfolio"/>
        <Slider dots={true} className=' mt-12 sm:w-1/2 h-[450px]' {...settings2}>
          <div>
          <img className='' src={roof} alt="" />
          </div>
          <div>
          <img className='' src={bulltooth} alt="" />
          </div>
          <div>
          <img src={cover} alt="" />
          </div>
        </Slider>
        <div className='flex mt-3 items-center justify-between'>
          <div className='font-semibold text-xl'>
            ({slide}/3)
          </div>
          <div className='flex gap-4  items-center justify-end [&>*]:h-5 [&>*]:w-5 [&>*]:rounded-full [&>*]:border-darkShade [&>*]:border-2'>
            <div className={slide==1?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==2?'bg-darkShade duration-500':"duration-500"}></div>
            <div className={slide==3?'bg-darkShade duration-500':"duration-500"}></div>
          </div>
        </div>
     </section>
    </>
  )
}

export default LANDING
