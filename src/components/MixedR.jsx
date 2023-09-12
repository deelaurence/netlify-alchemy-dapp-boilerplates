import React from 'react'
import { useState, useRef } from 'react'
import vrMockup from '../assets/landing-vr.webp'
import mrUserflow from '../assets/mr-userflow.jpg'
import mrScreen1 from '../assets/mr-screen11.webp'
import mrScreen2 from '../assets/mr-screen22.webp'
import mrScreen3 from '../assets/mr-screen33.webp'
import mrScreen4 from '../assets/mr-screen4.webp'


import vrGif from "../assets/headset.webp"

import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const MixedR = ({ locationProps }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")
    const [location, setLocation] = useState("")
    const oculus = document.querySelector('.headset')
    const solution = document.querySelector('.solution')
    const overview = document.querySelector('.overview')
    const main = document.querySelector('main')
    const touchStart = () => {
        //("start");
        // oculus.style.transform = "rotateY(0deg) translateY(5px)"
        oculus.style.transform = "scale(1.1)"
        // oculus.style.zIndex = "0"
        // // gsap.to(oculus, {
        //     yPercent: -10,
        //     duration: 2,
        //     rotateY: "0deg",
        //     // delay: 2,
        //     opacity: 1,
        //     zIndex: 1000,
        //     // repeat: -1,
        //     // yoyo: true,
        // })
    }
    const touchEnd = () => {
        //("end");
        oculus.style.transform = "scale(1) "
        // // oculus.style.opacity = ".1"
        // oculus.style.zIndex = "0"
        // gsap.to(oculus, {
        //     yPercent: 0,
        //     duration: 1,
        //     rotateY: "20deg",
        //     // delay: 2,
        //     opacity: .1,
        //     zIndex: 0,
        //     // repeat: -1,
        //     // yoyo: true,
        // })
    }
    useEffect(() => {
        setLocation(locationProps)
        //("kodetech effect");
        //(oculus);
        gsap.fromTo(main, {
            opacity: 0,
        },
            {
                opacity: 1,

                duration: 3,
            })

        gsap.to(oculus, {
            yPercent: 20,
            duration: 2,
            // rotate: "60deg",
            // delay: 2,
            opacity: .05,
            // zIndex: 10,

            scrollTrigger: {
                trigger: overview,
                scrub: true,
                start: "bottom bottom",
                end: "=+10px"
            }
            // repeat: -1,
            // yoyo: true,
        })
        gsap.to(oculus, {
            yPercent: 0,
            duration: 2,
            rotate: "60deg",
            // delay: 2,
            opacity: .05,
            // zIndex: 10,

            scrollTrigger: {
                trigger: overview,
                scrub: true,
                start: "bottom top",
                // end: "top top/",
                // markers: true
            }
            // repeat: -1,
            // yoyo: true,
        })
        gsap.to(oculus, {
            yPercent: 0,
            duration: 1,
            rotate: "60deg",
            // delay: 2,
            // opacity: 1,
            // zIndex: 10,

            scrollTrigger: {
                trigger: solution,
                scrub: 2,
                start: "bottom bottom",
                end: "+=10px"
            }
            // repeat: -1,
            // yoyo: true,
        })

    }, [location]);

    const [popupImg, setPopupImg] = useState('')
    const [pop, setPop] = useState(false)
    const [landscape, setLandscape] = useState(false)
    const handleEnlarge = (e) => {
        // setPopupImg("")
        setLandscape(false)
        setPop(!pop)
        setPopupImg(e.target.src)
    }
    const handleEnlargeLandscape = (e) => {
        // setPopupImg("")
        setLandscape(true)
        setPop(!pop)
        setPopupImg(e.target.src)
    }
    const handleDecrease = (e) => {
        // setPopupImg("")
        setPop(!pop)
    }
    return (
        <>
            <main ref={parentRef} className="opacity-0 px-6 tracking-[0.4px] sm:px-16 pt-20   relative flex flex-col bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade [&>*]:dark:text-darkShade md:min-h-[90vh] md:pb-10">
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10  h-screen w-screen" : "hidden"}>
                    <img src={popupImg} className={landscape ?
                        'relative  rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                </div>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <section className='headset overflow-hidden opacity-[.07] sm:hidden fixed'>
                    <img className='' src={vrGif} alt="" />
                </section>
                <section onTouchEnd={touchEnd} onTouchStart={touchStart} className=' mt-20 relative pb-10'>
                    <div>
                        <h1
                            className="text-[1.8rem] font-semibold md:text-5xl">
                            <span className='font-medium'>Enhancing Healthcare through Mixed Reality: <span>A Revolutionary Solution.</span></span>
                        </h1>
                    </div>
                    <div
                        className=' text-[1.1rem] font-[500]  text-[#fafafab9]  dark:text-da1hade leading-8 mt-16'>
                        <p className='mb-2'>Role:</p>
                        <p className='font-[600] text-[1.1rem] text-lightShade '>Product Designer</p>
                    </div>
                    {/* <div className='text-[1.1rem] font-[500]  text-[#fafafab9]  dark:text-da1hade leading-8 mt-10'>
                        <p className='mb-2'>Length:</p>
                        <p className='font-[600] text-white  dark:text-darkShade text-[1.1rem]'>3 weeks</p>
                    </div> */}
                    <div className='overview text-[1.5rem] font-[600] mt-16'>
                        <h3 className='mb-5'>
                            Overview.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                            In today's rapidly evolving technological landscape, Mixed Reality (MR) stands out as a transformative tool that combines the real world with augmented and virtual reality, fueled by 3D information. 
                            <br />
                            <br />
                            While augmented reality (AR) overlays  digital elements onto the real world and virtual reality (VR) creates a fully virtual environment, MR bridges the gap by integrating and enabling real-world interaction with virtual elements. 
                            <br />
                            <br />
                            Harnessing the power of MR in healthcare holds immense potential to revolutionize patient care and transform medical practices. 
                            <br />
                            <br />
                            This case study explores the implementation of a cutting-edge Mixed Reality application that aims to enhance patient experience, streamline communication, and enable better decision-making in the medical field.
                            <br />
                            <br />

                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={vrMockup} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            The Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            The healthcare system, despite its critical role in human well-being, has been plagued by various challenges, which have only been exacerbated by the recovery from the COVID-19 pandemic. 
                        </article>
                        <p className='text-[1rem] leading-8 font-[400]  mt-8  text-purple-400'>Factors that affect patient experience negatively include:</p>
                        <ul className='text-[1rem] font-[400] text-[#fafafab9] mt-6 [&>*]:overflow-visible overflow-visible  ml-4 dark:text-darkShade'>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span> A lack of personalized interaction with medical personnel.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Loss of patients’ data and records when they switch insurance plans or healthcare services.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Lack of price transparency as regards patients’ testing and therapy.</li>
                            {/* <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li> */}
                        </ul>
                        <article className='text-[1rem] mt-6 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            As a result, patient experience and retention levels have suffered, necessitating innovative solutions to improve healthcare delivery. 
                        </article>
                        
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Research Insights.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            In-depth secondary research was conducted to gain a comprehensive understanding of the challenges individuals face within the healthcare system. 
                        </article>
                        <p className='text-[1rem] leading-8 font-[400]  mt-8  text-purple-400'>I discovered the following:</p>
                        <ul className='text-[1rem] font-[400] text-[#fafafab9] mt-6 [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Healthcare is not readily accessible to everyone.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Although healthcare is now largely data-dependent technology implementation remains lacking.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>There is a communication gap between medical personnel and patients.</li>
                            {/* <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li> */}
                        </ul>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            All of these issues tend to hinder effective healthcare delivery. 
                        </article>
                    </div>
                    {/* <div ref={findingsRef} className=' text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Findings.
                        </h3>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Target users are inclined to carry out online purchases, however, they complained of certain difficulties
                            which made them restrict their online transactions.
                            <br />
                            <br />
                            <span className='block mt-4 mb-2'> These difficulties were in the form of:</span>
                            <br />
                            <br />

                            <ul className=' [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Complex</span> website interfaces.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Limited</span> payment methods.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Constrained</span> delivery options.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li>
                            </ul>

                        </article>
                    </div> */}
                    <div className=' text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Recognizing the potential of MR to enhance healthcare, the proposed solution leverages MR wearable devices, such as the Microsoft HoloLens, in conjunction with emerging imaging technologies. 
                            <br />
                            <br />
                            By providing medical professionals with spatial localization of anatomical structures, this immersive technology improves mental precision and simplifies preoperative planning. 
                            <br />
                            <br />
                            Moreover, the Mixed Reality application acts as a bridge, fostering a stronger interrelationship between medical personnel and patients.
                            <br />
                            <br />
                        </article>
                    </div>
                    
                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>User Flow.</h3>
                        </div>
                        <article className='text-[1rem] mb-8 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To ensure optimal user interaction, I developed a well-defined user flow, guiding the thought process and facilitating a seamless experience. By wearing a pair of HoloLens glasses, users can immerse themselves in a fully interactive MR environment, enhancing the visualization of medical information.
                        </article>
                        <img src={mrUserflow} alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens.
                        </h3>

                        <p className='text-[1rem] leading-8 font-[400]  mt-8  text-lightShade'>The application encompasses various screens, each designed to cater to different aspects of the healthcare experience.</p>
                        <ul className='text-[1rem] font-[400] text-[#fafafab9] mt-6 [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                            <li>The <span className='font-medium text-lightShade  dark:text-darkShade'>Patient's information</span> screen provides a comprehensive overview of the patient's medical history and relevant details, ensuring medical personnel have a holistic understanding of the patient's background.</li>
                            <li>The <span className='font-medium text-lightShade  dark:text-darkShade'>Charts</span> screen presents vital medical data in a visually appealing manner, allowing for better analysis and decision-making.</li>
                            <li>Finally, the <span className='font-medium text-lightShade  dark:text-darkShade'>Results</span> screen showcases the outcomes of medical tests and procedures, providing clarity and empowering patients to actively participate in their healthcare journey.</li>
                            {/* <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li> */}
                        </ul>
                        
                    </div>
                    <div className='solution flex flex-col gap-12 mt-16'>
                        <div><img src={mrScreen1} alt="" /></div>
                        <div><img src={mrScreen2} alt="" /></div>
                        <div><img src={mrScreen3} alt="" /></div>
                        {/* <div><img src={mrScreen4} alt="" /></div> */}
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Conclusion.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                            Through the strategic implementation of Mixed Reality, the proposed application demonstrates its potential to significantly improve healthcare experiences, boost patient engagement, facilitate remote consultations with experts, and enable realistic training simulations.  
                            </p>

                            <p>
                             By seamlessly integrating technology and human touch, this innovative solution offers a glimpse into the future of healthcare, paving the way for enhanced patient care and greater efficiency in medical practices.
                            </p>
                            <p>
                             With its unique blend of technological advancement and user-centric design, this case study serves as a powerful and valuable insight into how technology can revolutionize healthcare.
                            </p>
                        </article>

                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Takeaway.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                            Working on this Mixed Reality (MR) healthcare project has been an enlightening journey, allowing me to acquire invaluable insights as a product designer.   
                            </p>

                            <p>
                             Throughout the development process, I have learned several key lessons that have shaped my understanding of designing for transformative technologies and healthcare. 
                            </p>
                            <p>
                             Here are the key takeaways from this project:
                            </p>
                        </article>
                        <div className='text-[1rem] font-normal leading-8 text-[#fafafab9]'>

                        <div>
                            <h6 className='font-semibold text-lightShade mt-10 mb-4'>1. Embracing Novelty: The Power of Mixed Reality</h6>
                            <p>Exploring the potential of MR in healthcare has showcased the immense power of embracing novel technologies. MR's ability to seamlessly blend the physical and digital realms opens up new possibilities for visualization, communication, and decision-making in the medical field. As a product designer, it is essential to stay curious and embrace emerging technologies to create innovative solutions that have a profound impact on user experiences.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 2. Human-Centered Design: Enhancing Patient Care</h6>
                            <p>Designing for healthcare requires a strong focus on human-centered design principles. Understanding the pain points and challenges faced by both medical personnel and patients is crucial in developing meaningful solutions. By leveraging MR to bridge the communication gap, provide personalized experiences, and empower patients, we can enhance the overall quality of healthcare and improve patient outcomes.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 3. Seamless User Experience: Simplifying Complexity</h6>
                            <p>Creating a seamless user experience is paramount when designing for MR applications. The user flow, interface design, and interaction patterns must be intuitive and effortless, allowing users to navigate through the application effortlessly. Striking the right balance between visual appeal and functional simplicity is key to ensuring user engagement and adoption.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 4. Collaboration and Communication: Essential for Success</h6>
                            <p>The successful implementation of MR in healthcare relies on effective collaboration and communication between product designers, healthcare professionals, and stakeholders. Close collaboration ensures that the product meets the specific needs of medical personnel and aligns with industry standards and regulations. It is essential to foster a collaborative environment, actively seeking feedback and integrating it into the design process.</p>
                            <br />
                            <br />
                            <p>As a product designer working on this Mixed Reality healthcare project, I have learned the importance of embracing new technologies, prioritizing human-centered design, and creating seamless user experiences. By leveraging MR's capabilities, we can bridge communication gaps, enhance patient care, and revolutionize the healthcare industry. This project has reaffirmed my commitment to designing innovative solutions that have a positive impact on people's lives. As I move forward, these lessons learned will continue to guide me in creating innovative solutions that positively impact people's lives.</p>
                        </div>
                        </div>

                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>

                    </div>

                    <div className='mt-20 text-lightShade  dark:text-darkShade'>
                        <p className='mb-4'>Owari da.</p>
                        <p className=''>Arigato. <span className='text-base'>😊</span> </p>
                    </div>
                    <div className='flex flex-col'>
                    <Link to='/alertz' className='flex w-24 gap-2 items-center mt-20 '>
                        <img className='h-3 rotate-[180deg] ml-6' src={next} alt="" srcSet="" />
                        <p className='text-[1rem] leading-8 font-[500] -ml-4 text-[#fafafa]  dark:text-darkShade'>
                            Previous
                        </p>
                    </Link>
                    <Link to="/guild" className='flex gap-2 w-24 items-center self-end justify-end '>
                        <p className='text1rem] leading-8 font-[500]   '>
                            Next
                        </p>
                        <img className='h-3' src={next} alt="" srcSet="" />
                    </Link>
                    </div>
                </section>
            </main>

        </>
    )
}

export default MixedR
