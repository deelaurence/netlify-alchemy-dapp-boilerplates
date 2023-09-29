import { useLocation } from 'react-router-dom'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import {FiArrowUpRight} from 'react-icons/fi'

import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Footer = ({ locationProps }) => {
  gsap.registerPlugin(ScrollTrigger)
  const footerLineRef = useRef(null)
  const contactRef = useRef(null)
  const gotProjectRef = useRef(null)
  const connectRef = useRef(null)
  const footerLine = footerLineRef.current
  const contact = contactRef.current
  const gotProject = gotProjectRef.current
  const connect = connectRef.current
  const location = useLocation()
  const [currentLocation, useCurrentLocation] = useState('')


  useEffect(() => {
    useCurrentLocation(locationProps)
    //("footer use effect");
    gsap.fromTo(footerLine, {
      width: 0,
    }, {
      width: "100%",
      duration: 1.5,
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(gotProject, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(contact, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.2,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(connect, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })

  }, [currentLocation, location])
  return (
    <footer
      className="tracking-[0.5px] mt-32  pt-24 pb-24 px-6 sm:px-16 bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade"
    >
      <div ref={footerLineRef} className='bg-opaque dark:bg-darkShade h-[1px] w-full'>
      </div>
      <div className='mt-14 overflow-visible'>
        <h3 ref={gotProjectRef} className='text-3xl font-semibold mb-12 '>
          Onicon, <span className=' opacity-70'>NG.</span>  &mdash; You deserve top tier engineering.
        </h3>
        {/* <h3 ref={gotProjectRef} className='text-xl overflow-visible ml-16 text-right '>
          Are you looking for an efficient enginnering firm?
        </h3> */}
        <section className='md:flex md:justify-between'>
          <div ref={contactRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              Contact.
            </p>
            <a className='font-medium' href="mailto:hr-onicon.ng@outlook.com underline border-b">hr-onicon.ng@outlook.com</a>
          </div>
          <div ref={connectRef}>
            <p className='text-opaque mt-16 mb-3'>
              Country Locations.
            </p>


            <div className='flex font-medium gap-6 flex-col'>
             <h3 className='font-semibold'>AKURE</h3>

            <div className='flex flex-col gap-2'>
              <a className='font-medium underline' href="mailto:hr-onicon.ng@outlook.com underline border-b">hr-onicon.ng@outlook.com</a>
              <a href="tel:+2348066709728">+2348066709728</a>
              <address className='not-italic'>Onicon resources limited, Toyin Building,19D Oba Adesida road Akure, Ondo State</address>
                <div className='mt-2 flex items-center underline underline-offset-0 gap-1'>
                <a href="https://maps.app.goo.gl/4j4pVb5eJcCfErgY9?g_st=iw">SEE ON MAP </a>
                <FiArrowUpRight className='text-xl  block rotate-["45deg"]'/>
                </div>
              
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mt-12 opacity-75'>
            <p>Built by <a className='underline' href="https://deverence.xyz">deverence</a>  </p>
          </div>
        </section>
      </div>

    </footer>

  )
}

export default Footer
