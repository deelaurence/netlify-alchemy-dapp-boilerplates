import React from 'react'
import { useState, useRef } from 'react'
import kodeTechCofee from '../assets/landing-guild.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import guildLanding from '../assets/landing-guild.webp'

import userFlow from '../assets/guild-userflow.webp'
import userPersona from '../assets/guild-userpersona.webp'
import userJourney from '../assets/guild-userjourney.webp'
import screen1 from '../assets/guild-screen1.webp'
import screen2 from '../assets/guild-screen2.webp'
import screen3 from '../assets/guild-screen3.webp'
import screen4 from '../assets/guild-screen4.webp'

// import userPersona from './images/userpersona.webp'

import { Link } from 'react-router-dom'

import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const Guild = ({ locationProps }) => {
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
                            Guild: <span className='font-medium'> A Web3 Community platform</span>
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
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                            The rise of Web3 has sparked a global frenzy, captivating the media and tech enthusiasts alike. Web3, the decentralized version of the web, holds immense potential for revolutionizing online interactions and fostering peer-to-peer exchanges.
                            <br />
                            <br />
                            Recognizing the need for a dedicated space where individuals can engage, learn, and explore the intricacies of Web3, Guild emerges as a game-changing community platform. 
                            <br />
                            <br />
                            In this case study, we delve into the journey of Guild, a platform designed to surpass the user experience of the widely used Discord. 
                            <br />
                            <br />
                            As a Product Designer and a member of the DesignersDAO community, I took on the challenge alongside my team to craft an exceptional user-centric platform that embraces the spirit of Web3.
                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={kodeTechCofee} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            Understanding the Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            While Web3 carries an undeniable allure, its complexities can deter new users from fully engaging with the technology. The aim of this project was to create a community platform for Web3 that would offer seamless user experience, surpassing the limitations of Discord.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Desk Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Since our project centered around creating a better UX experience than Discord, we carried out research to understand the user interaction with Discord as a Web3 community platform.
                            <br />
                            <br />
                            To accomplish this, we conducted in-depth desk research to grasp the nuances of user interaction on Discord and explored alternative platforms like Slack, element.io, and tribe.so. 
                            <br />
                            <br />
                            Additionally, we conducted primary research to connect with potential users, uncover pain points, and unearth opportunities to shape the product.
                        </article>
                    </div>
                    <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Research.
                        </h3>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Discord, a popular community platform known for its association with tech and gaming, proved to have certain shortcomings that hindered the user experience. 
                            <br />
                            <br />
                            Through extensive user research, including interviews, we uncovered valuable insights:                            
                            <br />
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4 mt-2  dark:text-darkShade'>
                                <li>Discord's onboarding process was subpar, leading to confusion among new users.</li>
                                <li>Navigating the platform proved challenging, particularly for newcomers.</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To address these pain points and prioritize an exceptional user experience, we outlined the core objectives for Guild:
                            <br />
                            <br />
                            <ol className='[&>*]:overflow-visible list-none flex flex-col gap-4 overflow-visible ml-4  dark:text-darkShade'>
                                <p><span className='font-medium text-lightShade  dark:text-darkShade'></span>
                                    <span className='font-bold text-lightShade'>1. Streamlined Onboarding:</span>  We aimed to enhance the onboarding process to ensure users quickly familiarize themselves with Guild's features and functionalities.
                                </p>
                                <p><span className='font-medium text-lightShade  dark:text-darkShade'></span>
                                    <span className='font-bold text-lightShade'>2. Intuitive Navigation:</span> Effortless platform navigation was prioritized to minimize any potential confusion factors.
                                </p>
                            </ol>


                            <span className='block mt-4 mb-2'> With these objectives in mind, we integrated several Web3 features into Guild to elevate its user experience. Notable features included NFT profiles and a voting system through polls.</span>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                           The User Journey.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To ensure a seamless user experience, we carefully designed the user journey, catering to both existing and new users. This involved mapping out the different stages of user interaction, from account creation to community exploration and engaging in conversations. 
<br />
<br />
                            The user journey was meticulously tailored to provide an intuitive and enjoyable experience at every step.
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userJourney} alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To guide the iteration process effectively, we developed user persona that represents the target audience—individuals with an interest in Web3 and some experience with community-based platforms. 
                            <br />
                            <br />
                            These persona allowed us to empathize with user needs, motivations, and pain points, facilitating a user-centric design approach.
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userPersona} alt="" />
                    </div>


                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>User Flow.</h3>
                        </div>
                        <article className='text-[1rem] mb-6 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To enhance user interaction and guide our thought process, we developed a user flow. This visual representation ensured a clear understanding of user actions, ensuring a seamless and intuitive platform experience.
                        </article>
                        <div className='flex flex-col gap-8 text-opaque font-medium'>
                            <div>
                                <img src={userFlow} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-6'>
                            Designing the Interface.
                        </h3>
                    </div>
                    <article className='text-[1rem] mb-10 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                        At the core of Guild's design philosophy was the emphasis on human connections and community-centricity. The interface was meticulously crafted to incorporate Web3 features while facilitating seamless interaction and effortless navigation. 
                        <br />
                        <br />
                        Noteworthy screens included <span className='text-lightShade font-semibold'>account creation, </span> <span className='text-lightShade font-semibold'>community exploration </span>and <span className='text-lightShade font-semibold'>engaging in conversations</span>, all designed with the utmost attention to detail and aesthetic appeal.

                    </article>
                    <div className='flex flex-col gap-8'>
                        <div><img src={screen1} alt="" /></div>
                        <div><img src={screen2} alt="" /></div>
                        <div><img src={screen3} alt="" /></div>
                        <div><img src={screen4} alt="" /></div>
                    </div>

                        <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Conclusion.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                            Guild represents a paradigm shift in Web3 community platforms, offering a user experience that surpasses traditional platforms like Discord. By addressing the pain points of users, such as poor onboarding and navigation, Guild provides a seamless and intuitive environment for individuals interested in Web3 to connect, learn, and explore new opportunities.
                            </p>

                            <p>
                            Through extensive research and user-centric design principles, Guild has successfully transformed the way users interact with Web3 communities. The incorporation of Web3 features like NFT profiles and voting mechanisms further enhances the platform's appeal, fostering a sense of belonging and empowerment within the community.
                            </p>
                            <p>
                            Moreover, the carefully curated user journey, user personas, and user flow ensure that both new and existing users can navigate Guild effortlessly and engage in meaningful conversations. The interface design reflects a commitment to human connections and community-centricity, striking a delicate balance between functionality and aesthetics.
                            </p>
                            <p>
                                Guild is more than just a community platform—it is a testament to the limitless possibilities of Web3 and the power of seamless user experiences.
                            </p>
                        </article>

                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Takeaway.
                        </h3>
                        <article className=' flex flex-col gap-2 text-[1rem] leading-8 font-[400]  text-[#fafafab9]'>
                            <p>
                                Working on Guild as a Product Designer has been an enlightening and transformative experience. Throughout the journey, I have gained valuable insights and learned crucial lessons that have shaped me both professionally and personally.
                            </p>

                            <p>
                                Here are the key takeaways from my involvement in the Guild project:                           
                            </p>
                        </article>
                        <div className='text-[1rem] font-normal leading-8 text-[#fafafab9]'>

                        <div>
                            <h6 className='font-semibold text-lightShade mt-10 mb-4'>1. Understanding the Importance of User-Centric Design:</h6>
                            <p>Guild reinforced the significance of prioritizing user needs and preferences in design. By conducting thorough research, connecting with users, and empathizing with their pain points, I recognized that a user-centric approach is the foundation of creating exceptional experiences. Putting users at the forefront of the design process is essential for crafting meaningful and impactful solutions.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 2. Embracing the Complexity of Web3:</h6>
                            <p>Web3 presented a complex and ever-evolving landscape, challenging me to dive deep into its intricacies. The project highlighted the importance of staying updated with emerging technologies and trends. Embracing complexity allowed me to explore innovative solutions and adapt to the dynamic nature of the Web3 space.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 3. Balancing Innovation and Familiarity:</h6>
                            <p>Guild taught me the art of striking a balance between pushing boundaries with innovative features and maintaining familiarity for users. While integrating Web3 elements like NFT profiles and voting mechanisms, it was crucial to ensure that the platform remained accessible and intuitive for users of varying backgrounds. This delicate balance between novelty and familiarity is vital in creating inclusive and user-friendly experiences.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 4. The Power of Collaboration:</h6>
                            <p>Throughout the Guild project, collaboration played a pivotal role. Working closely with the DesignersDAO community and leveraging the diverse expertise of team members enriched the design process. The power of collaboration lies in the exchange of ideas, constructive feedback, and collective effort, leading to stronger and more impactful outcomes.</p>
                            <br />
                            <p>As I reflect on my journey with Guild, I am equipped with a deeper understanding of user-centric design, the complexities of Web3, the balance between innovation and familiarity, the value of collaboration, and the power of injecting personality into experiences. These takeaways will undoubtedly guide me in my future endeavors as a Product Designer and pave the way for creating remarkable user experiences in the future.</p>
                            <br />
                            <p>Guild has been more than just a project — it has been a stepping stone towards realizing my goals and aspirations as a Product Designer. With the skills and knowledge gained from this experience, I am ready to embark on new challenges, contribute to meaningful projects, and make a lasting impact in the realm of digital product design.</p>
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
                    <Link to="/mr" className='flex w-32 gap-2  items-center mt-20 '>
                        <img className='h-3 rotate-[180deg] ml-6' src={next} alt="" srcSet="" />
                        <p className='text-[1rem] leading-8 font-[500] -ml-4 text-[#fafafa]  dark:text-darkShade'>
                            Previous
                        </p>
                    </Link>
                    <Link to="/kodetech" className='flex  gap-2 w-24 items-center self-end justify-end '>
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

export default Guild

