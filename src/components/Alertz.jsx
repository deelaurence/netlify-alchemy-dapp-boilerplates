import React from 'react'
import { useState, useRef } from 'react'
import alertzMockup from '../assets/landing-alertz.webp'
import kodeTechCofee from '../assets/kodetech-mockup.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import response1 from '../assets/alertz-response1.webp'
import response2 from '../assets/alertz-response2.webp'
import empathy from '../assets/alertz-empathy.webp'
import { Link } from 'react-router-dom'

import userPersona from '../assets/alertz-persona.webp'
import userFlow from '../assets/alertz-userflow.webp'
import screen from '../assets/alertz-screen.jpg'

import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const Alertz = ({ locationProps }) => {
    const main = document.querySelector('main')
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")
    const [location, setLocation] = useState("")
    // useEffect(() => {
    //     setLocation(locationProps)
    //     //("kodetech effect");
    //     gsap.fromTo(parent, {
    //         background: "#212121",
    //         color: "#fafafa"
    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "rgb(100,100,100)",
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: finding,
    //                 toggleActions: "play reverse play reverse"
    //                 // scrub: true
    //             }
    //         })
    //     gsap.fromTo(articles, {
    //         background: "#212121",
    //         color: "#fafafab9"

    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "rgb(100,100,100)",
    //             duration: 1,
    //             scrollTrigger: {
    //                 // scrub: true,
    //                 trigger: finding,
    //                 toggleActions: "play reverse play reverse"
    //             }

    //         })
    //     gsap.fromTo(span, {
    //         background: "#212121",
    //         color: "#fafafa"


    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "white",
    //             duration: 1,
    //             scrollTrigger: {
    //                 // scrub: true,
    //                 toggleActions: "play reverse play reverse",
    //                 trigger: finding
    //             }
    //         })
    //     // gsap.fromTo(articles, {
    //     //     y: 30,
    //     //     // opacity: 0

    //     // },
    //     //     {
    //     //         y: 0,
    //     //         // opacity: 1,
    //     //         scrollTrigger: {
    //     //             duration: 2,
    //     //             // scrub: true,
    //     //             trigger: articles,
    //     //             toggleActions: "play reverse play reverse"
    //     //         }

    //     //     })
    // }, [location]);
    useEffect(() => {
        setLocation(locationProps)
        //("kodetech effect");
        gsap.fromTo(main, {
            opacity: 0,
        },
            {
                opacity: 1,

                duration: 3,
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
                <section className='mt-20  relative pb-10'>
                    <div>
                        <h1
                            className="text-[1.8rem] font-semibold md:text-5xl">
                            Alertz: <span className='font-medium'><span className=' sm:inline'> Bridging the Information Gap in Crime Awareness.</span></span>
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
                    <div className='text-[1.5rem] font-[600] mt-16'>
                        <h3 className='mb-5'>
                            Overview.
                        </h3>
                        <article className='text-[1rem] flex flex-col gap-4 leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                        <p>
                           Alertz is a revolutionary mobile application designed by a dynamic duo of talented designers
                            for the sole purpose of showcasing information about criminal activity to users. 
                        </p>
                        <p>
                            As the Product Designer, I played a crucial role in creating a unique solution that
                             addresses the growing concern of crime in our society. 
                        </p>
                        <p>
                            Alertz aims to tackle the information gap in crime awareness by providing
                             users with real-time crime alerts and empowering them to take action when needed.
                        </p>
                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={alertzMockup} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            The Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            <span className='text-red-300'></span> Crime is an unfortunate reality that can occur at any time and place, 
                            but the bigger problem lies in the lack of information available to the general public.
                            <br /> 
                            <br /> 
                            We set out to answer two crucial questions: 
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4 font-semibold dark:text-darkShade'>
                                <li>How do people become aware of crimes happening in their vicinity?</li>
                                <li>And once they are aware, what can they do to help?</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To understand the pain points of our target users and find the most effective solution, we conducted an extensive survey. The survey revealed the challenges faced by individuals in 
                            relation to crime awareness and provided valuable insights into their needs and thought processes.
                        
                        <p className='mt-4 font-semibold'>Key survey findings:</p>
                        
                        </article>

                        <ul className='[&>*]:overflow-visible overflow-visible ml-4  text-[1rem] text-[#fafafab9] font-[400]'>
                            <li>
                                75% of respondents felt that there was a lack of information about crimes happening around them.
                            </li>
                            <li>

                                82% expressed a desire to help if they were aware of a crime in progress.
                            </li>
                            <li>
                                63% felt unsafe in certain areas due to a lack of awareness.
                            </li>
                        </ul>
                        <p className='text-[1rem] leading-8 font-[400] mt-8  text-purple-400'>Here is some data from their responses:</p>
                    </div>
                    <div className='mt-10'>
                        <img src={response1} alt="" />
                    </div>
                    <div className='mt-10'>
                        <img src={response2} alt="" />
                    </div>
                    
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To bridge the information gap and empower users to act on crime-related information,
                             we developed the following innovative solutions within the Alertz mobile application:
                            <br />
                            <br />

                            <ol className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade'> Daily Overview of Emergency Reports:</span>  Users can access a comprehensive overview of emergency reports on a daily basis,
                                 ensuring a constant flow of crime-related information.</li>
                                <li><span className='font-medium text-lightShade'> Create Your Own Emergency Reports:</span>  In case of danger, users can create their own emergency reports to alert others and seek help. This feature allows for quick and efficient communication during critical situations whilst promoting a collaborative and supportive environment.</li>
                                <li><span className='font-medium text-lightShade'> Map Feature for Location-based Reports:</span> The application includes a map feature that enables users to search for specific locations and view emergency reports filed at those locations during a particular time frame. This feature provides users with localized crime information.</li>
                                <li><span className='font-medium text-lightShade'> Emergency Contact Number: </span> To further enhance safety, an emergency contact number is available within the application. Users can quickly reach out for help in emergency situations, either for themselves or for other users who have filed emergency reports.</li>
                            </ol>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Empathy Map.
                        </h3>

                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To gain a deeper understanding of our users' pain points and perspectives, we extracted relevant information from the survey responses.
                            The empathy map helped us visualize their thoughts, feelings, and actions:
                         <ol className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade'> Thoughts:</span> Users expressed concern about personal safety, the need for reliable information, and the desire to contribute to a safer community.</li>
                                <li><span className='font-medium text-lightShade'> Feelings:</span> Fear, uncertainty, and frustration were common emotions among users.</li>
                                <li><span className='font-medium text-lightShade'> Actions:</span> Users were eager to access real-time crime alerts, report incidents, and receive timely help when needed.</li>
                            </ol>
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={empathy}  alt="" />
                    </div>

                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona: Meet Faith.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400] gap-2 flex flex-col text-[#fafafab9]  dark:text-darkShade'>
                            <p>
                                Based on the empathy map analysis, we created a user persona named Faith John, who embodies the characteristics and aspirations of our target users.
                            </p>
                            <p>
                                Faith is a young university school student living in a bustling city, concerned about her safety and eager to contribute to a safer community.
                            </p>
                            <p>
                                However, due to the lack of information, Faith feels helpless and unsure of how to respond to crime incidents. 
                            </p>
                            <p>
                                Alertz, with its comprehensive crime alerts and user-friendly features, resonates with Faith’s needs.
                            </p>    
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userPersona} alt="" />
                    </div>
                   
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Flow.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            We carefully crafted a user flow that ensures a seamless and intuitive experience for Alertz users. This flow guides our thought process and helps us create a product that is both functional and enjoyable to use.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={userFlow}  alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens: A Glimpse of the Alertz experience.
                        </h3>
                        <article className='mb-16 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            We brought our vision to life through meticulously designed screens that reflect Alertz's user-friendly interface and visually appealing aesthetics. The mockups showcase the app's various features and the seamless navigation experience it offers.
                        </article>

                    </div>
                    <div className=''>
                        <img src={screen}  alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Conclusion.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                            Alertz is not just a mobile application; it's a gateway to safer communities. By bridging the information gap and empowering users with real-time crime alerts and actionable solutions, we have revolutionized the way individuals respond to criminal activities. 
                            </p>

                            <p>
                             With a commitment to user-centric design, Alertz ensures that users can stay informed, take immediate action, and stay one step ahead of crime.
                            </p>
                        </article>

                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Takeaway.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                            Working as a Product Designer on the Alertz project has been a truly enriching experience. Here are some key takeaways from my journey:
                            </p>
                        <div>
                            <h6 className='font-semibold text-lightShade mt-6 mb-2'> 1. Empathy is Key</h6>
                            <p>Understanding the pain points and needs of our users was crucial in developing an effective solution. Conducting surveys and creating empathy maps allowed us to put ourselves in the users' shoes, enabling us to design a product that truly addresses their concerns. Empathy-driven design is a powerful tool that can lead to impactful solutions.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-6 mb-2 text-lightShade'> 2. Bridging the Information Gap</h6>
                            <p>The challenge of bridging the information gap in crime awareness highlighted the importance of real-time communication and access to relevant data. Alertz provides users with timely crime alerts, empowering them to take proactive measures. It taught me the significance of leveraging technology to bridge gaps in information and enhance personal safety.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-6 mb-2 text-lightShade'> 3. Iteration and Refinement</h6>
                            <p>The design process is an iterative one, and Alertz taught me the importance of constant iteration and refinement. Through user feedback and testing, we were able to identify areas for improvement and fine-tune the user experience. This iterative approach allowed us to create a product that is user-centric and continuously evolving.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-6 mb-2 text-lightShade'> 4. Collaborative Design</h6>
                            <p>Working in a team of talented designers, demonstrated the power of collaboration. By leveraging each other's strengths and skills, we were able to create a cohesive and impactful design solution. Collaboration fosters creativity, innovation, and results in a stronger end product.</p>
                            <p className='mt-6'>As I continue to refine my skills as a Product Designer, the experiences and lessons learned from working on Alertz will undoubtedly shape my approach to future projects. I am excited to apply these insights and continue creating meaningful and user-centric design solutions that have the potential to make a positive impact in the tech industry.</p>
                        </div>
                        </article>

                    </div>

                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Pitch Deck <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>

                    </div>

                    <div className='mt-20 text-lightShade  dark:text-darkShade'>
                        <p className='mb-4'>Owari da.</p>
                        <p className=''>Arigato. <span className='text-base'>😊</span> </p>
                    </div>
                   <div className='flex flex-col'>
                    <div className='flex gap-2 opacity-50 items-center mt-20 '>
                        <img className='h-3  rotate-[180deg] ml-6' src={next} alt="" srcSet="" />
                        <p className='text-[1rem] leading-8 font-[500] -ml-4 text-[#fafafa]  dark:text-darkShade'>
                            Previous
                        </p>
                    </div>
                    <Link to="/mr" className='flex self-end w-24 relative right-0 gap-2 items-center justify-end '>
                        <p className='text-[1rem] leading-8 font-[500]   '>
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

export default Alertz
