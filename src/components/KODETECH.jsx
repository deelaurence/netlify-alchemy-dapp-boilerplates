import React from 'react'
import { useState, useRef } from 'react'
import kodeTechCofee from '../assets/kodetech-mockup.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import { Link } from 'react-router-dom'
import userPersona from '../assets/userpersona.webp'
import architecture from '../assets/kodetech-flow1.webp'
import userFlow1 from '../assets/kodetech-flow2.webp'
import userFlow2 from '../assets/kodetech-flow3.webp'
import userFlow3 from '../assets/kodetech-flow4.webp'

import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const KODETECH = ({ locationProps }) => {
    const controls = useAnimation();
    const main = document.querySelector('main')
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
            <main ref={parentRef} className="px-6 opacity-0 tracking-[0.4px] sm:px-16 pt-20   relative flex flex-col bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade [&>*]:dark:text-darkShade md:min-h-[90vh] md:pb-10">
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
                            KodeTech: <span className='font-medium'> An <br /> E-Commerce Website</span>
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
                        <article className='text-[1rem] flex flex-col gap-3 leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                            <p>

                            KodeTech, a Nigerian tech brand, aimed to revolutionize the e-commerce space by providing a platform that connects users with quality tech gadget products while delivering a top-notch user experience.
                            </p>
                            <p>

                            As a Product Design intern at KodeCamp, I had the privilege of being part of this exciting team project. 
                            </p>
                            <p>

                            In this case study, we will explore how we addressed the challenges faced by users and developed a user-friendly e-commerce website that successfully bridged the communication gap and established KodeTech as a leading player in the Nigerian market.
                            </p>
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
                        <article className='text-[1rem] flex flex-col gap-3 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            <p>
                            KodeTech, a dynamic Nigerian-Tech brand, is driven by the mission to bridge the communication gap through the innovative use of technology and cutting-edge tech gadgets. 
                            </p>
                            <p>
                            With a deep understanding of the market landscape, KodeTech recognized the need for a robust platform that not only connects with users but also delivers an exceptional user experience while ensuring the availability of high-quality products.
                            </p>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Primary Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To begin, we conducted primary research to gain insights 
                            into the pain points of our target users. 
                            We discovered that although users were 
                            inclined to make online purchases, 
                            they faced several difficulties that hindered their online transactions. 
                        
                        </article>
                    </div>
                    <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-4'>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                        
                            <p className=''>These challenges included:</p>

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Complex</span> website interfaces.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Limited</span> payment methods.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Constrained</span> delivery options.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Armed with a deep understanding of the users' challenges, we set out to create a solution that would enhance their experience while aligning with KodeTech's core objectives.
                            <br />
                            <br />
                            We formulated the following goals:
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Ensuring user-friendliness on the website:</span> We redesigned the website interface to be intuitive, visually appealing, and easy to navigate, ensuring a seamless user experience.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Prioritizing easy navigation:</span> We focused on creating a clear and straightforward navigation system, allowing users to find products effortlessly and browse various categories.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Including a variety of payment methods:</span> Recognizing the importance of diverse payment options, we integrated multiple payment gateways to offer users a wide range of choices.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Making sure there are different delivery options available:</span> To address the issue of constrained delivery options, we collaborated with reliable logistics partners to expand the delivery network and ensure timely and convenient deliveries.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Crafting detailed product descriptions:</span> We understood the significance of providing comprehensive product information to users. Hence, we enhanced the product descriptions by including key specifications, high-quality images, and customer reviews to facilitate informed purchasing decisions. </li>
                            </ul>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] flex flex-col gap-3 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            <p>To create a user-centric product, we focused on the younger demographic that constituted the majority of KodeTech's user base. </p>
                            <p> By consolidating user profiles, we developed a user persona named Grey, a tech-savvy individual eager to explore and purchase the latest tech gadgets. </p>
                            <p>Understanding Grey’s needs, aspirations, and pain points helped us tailor the user experience to meet the expectations of users effectively.</p>
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userPersona} alt="" />
                    </div>
                    <article className='text-[1rem] mt-10 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                        After this, the information architecture and
                        task flows were designed.
                    </article>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Information Architecture.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 dark:text-darkShade'>
                            <p>An end-to-end information architecture workflow was essential to ensure seamless user interactions. Through careful planning and meticulous structuring, we organized the website's content, features, and functionalities. </p>
                            <p>The information architecture enabled users to easily navigate through the platform, find products, and complete their desired actions with minimal effort.</p>
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={architecture}  alt="" />
                    </div>

                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>Task Flows.</h3>
                        </div>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 dark:text-darkShade'>
                            We designed intuitive task flows to guide users through essential actions on the platform. Three key task flows were identified:
                           <ul className='[&>*]:overflow-visible overflow-visible ml-4 mb-8 dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Sign Up/Log In task flow:</span> This flow aimed to provide users with a streamlined onboarding experience, allowing them to create accounts, log in, and manage their profiles effortlessly.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Order/Add to Cart task flow:</span> We focused on optimizing the process of browsing and adding products to the cart, ensuring a seamless and enjoyable shopping experience.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Check Out task flow:</span> - Our objective was to simplify the checkout process by minimizing friction points, facilitating smooth payment, and capturing accurate delivery details.</li>
                            </ul>
                        </article>
                        <div className='flex flex-col gap-8 text-opaque font-medium'>
                            <div>
                                <h5 className='mb-5'>Sign Up/Log In task flow.</h5>
                                <img  src={userFlow1} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-5'>Order/Add to Cart task flow.</h5>
                                <img  src={userFlow2} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-5'>Check Out task flow.</h5>
                                <img  src={userFlow3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 mb-16 dark:text-darkShade'>
                            <p>To visually communicate the user interface and design elements, we created a series of screens that demonstrated the website's look and feel. </p>
                            <p>These screens showcase a clean, modern design with vibrant visuals, reflecting KodeTech's brand identity and commitment to user-centricity.</p>
                        </article>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div><img src={kodeTech1} alt="" /></div>
                        <div><img src={kodeTech2} alt="" /></div>
                        <div><img src={kodeTech3} alt="" /></div>
                    </div>
                    {/* <div className='text-[1rem] font-normal leading-8 text-[#fafafab9]'>
                     
                        <div className='mt-14 font-semibold text-[1.5rem] mb-10'>
                            <h3>Results and Impact.</h3>
                        </div>
                        
                        <div className='mt-6'>
                            <h6 className='font-semibold text-lightShade mb-2'>1. Increased User Engagement: 
                            <span className='font-normal text-[#fafafab9]'> The user-friendly interface, simplified navigation, and comprehensive
                             product descriptions captivated users, leading to increased engagement and 
                             longer browsing sessions on the platform. 
                             Users found it easier to explore KodeTech's 
                             extensive range of tech gadgets, resulting 
                             in a higher likelihood of making a purchase.
                             </span>
                            </h6>
                            
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-2 text-lightShade'> 2. Improved Conversion Rates:
                            
                            <span className='font-normal text-[#fafafab9]'> By addressing the challenges users faced during online transactions, such as limited payment methods and constrained delivery options, we witnessed a remarkable improvement in conversion rates. Users felt confident and secure throughout the buying process, resulting in a higher percentage of successful transactions.</span>
                            </h6>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-2 text-lightShade'> 
                            3. Positive User Feedback:
                            
                            <span className='font-normal text-[#fafafab9]'> Strengthening customer support channels, such as live chat or chatbot functionality, can provide users with real-time assistance, improving their overall experience and resolving queries promptly.</span>
                            </h6>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-2 text-lightShade'> 
                            4. Expansion of Customer Base: 
                            
                            <span className='font-normal text-[#fafafab9]'> KodeTech's focus on the younger demographic, coupled with the enhanced user experience, attracted a wider customer base. The website's user-centric approach resonated with tech-savvy individuals seeking a reliable platform to purchase quality tech gadgets. As a result, KodeTech witnessed an increase in new customers, expanding its market reach.</span>
                            </h6>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 5. Business Growth and Brand Recognition:
                            
                            <span className='font-normal text-[#fafafab9]'> With the improved website, KodeTech experienced substantial business growth, reporting increased sales and revenue. The brand's reputation for delivering quality products and an exceptional user experience gained traction within the Nigerian market. KodeTech established itself as a leading tech brand, garnering recognition and trust from customers and industry peers alike.</span>
                            </h6>
                        </div>
                        
                       
                        </div>
                    <div className='text-[1rem] font-normal leading-8 text-[#fafafab9]'>
                        <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5 text-lightShade'>
                            Future Considerations.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 mb-6 dark:text-darkShade'>
                            
                            <p>While the current implementation of the KodeTech e-commerce website has been successful, continuous improvement and innovation are essential to maintaining its competitive edge. </p>
                            <p>Some potential areas for future development include:</p>
                        </article>
                    </div>
                        <div>
                            <h6 className='font-semibold  mb-4 text-lightShade'>1. Personalization </h6>
                            <p>Implementing personalized recommendations and tailored experiences based on user preferences and purchase history can further enhance user engagement and encourage repeat purchases.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 2. Integration of Social Commerce:</h6>
                            <p>Exploring social media integrations and features that enable users to share products, reviews, and recommendations on their social networks can increase brand visibility and drive organic growth.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 3. Enhanced Customer Support:</h6>
                            <p>The revamped website received overwhelmingly positive feedback from users. They appreciated the seamless experience, intuitive design, and the availability of multiple payment and delivery options. Users felt that KodeTech genuinely understood their needs and catered to them effectively, fostering trust and loyalty towards the brand.</p>
                        </div>
                        
                        </div> */}

                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5 text-lightShade'>
                            Conclusion.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 mb-6 dark:text-darkShade'>
                            
                            <p>Through our meticulous research, thoughtful design, and dedication to user-centricity, we successfully transformed the KodeTech e-commerce website into a seamless platform that bridges the communication gap between the brand and its users. </p>
                            <p>By prioritizing user-friendliness, easy navigation, diverse payment options, and detailed product descriptions, we not only enhanced the user experience but also contributed to KodeTech's business growth and brand recognition.</p>
                            <p>The KodeTech case study exemplifies our ability to deliver innovative and impactful design solutions. </p>
                        </article>
                    </div>

                    <div className='text-[1rem] font-normal leading-8 text-[#fafafab9]'>
                        <div className='text-[1.5rem] font-[600] mt-10'>
                        <h3 className='mb-5 text-lightShade'>
                            Takeaway.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9] flex flex-col gap-3 mb-6 dark:text-darkShade'>
                            
                            <p>Working on the KodeTech e-commerce website as a Product Designer at KodeCamp has been an invaluable learning experience, providing me with key insights and skills that have shaped my growth as a product designer. </p>
                            <p>Here are some of the key takeaways from this project:</p>
                        </article>
                    </div>
                        <div>
                            <h6 className='font-semibold text-lightShade mb-4'>1. User-Centricity is Key: </h6>
                            <p>The success of any digital product hinges on understanding the needs, pain points, and aspirations of the target users. By conducting thorough research and creating a user persona, we were able to design a platform that resonated with our target audience, resulting in increased engagement, conversion rates, and customer satisfaction.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 2. Empathy and Problem Solving:</h6>
                            <p>As a Product Designer, empathizing with users and approaching problem-solving with a user-centric mindset are essential. By delving into the pain points faced by KodeTech's users, we were able to identify opportunities for improvement and craft effective solutions. This experience has reinforced the importance of actively listening to users and being receptive to their feedback throughout the design process.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 3. Seamless User Experience:</h6>
                            <p>Designing an intuitive and seamless user experience is paramount to the success of any e-commerce platform. By prioritizing user-friendliness, easy navigation, and clear task flows, we created a website that guided users through their journey effortlessly. This project taught me the significance of attention to detail in crafting interactions, visual hierarchy, and information architecture to optimize the overall user experience.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 4. Iteration and Continuous Improvement:</h6>
                            <p>The design process is iterative, and there is always room for improvement. Throughout the project, we incorporated user feedback, refined designs, and iterated on the website's features and functionalities. This iterative approach enabled us to create a product that met the evolving needs of users and positioned KodeTech for future growth.</p>
                        </div>
                        <div>
                            <h6 className='font-semibold mt-10 mb-4 text-lightShade'> 5. Collaboration and Communication:</h6>
                            <div className='flex flex-col gap-3'>
                            <p>Effective collaboration with cross-functional teams is crucial for successful product design. Working closely with developers, stakeholders, and fellow designers allowed us to align our goals, overcome challenges, and deliver a cohesive and impactful solution. Clear communication, active listening, and the ability to present and articulate design decisions were vital skills honed during this project.</p>
                            <p>By incorporating these takeaways into my skill set, I am better equipped to tackle future design challenges and deliver exceptional user experiences. </p>
                            <p>The KodeTech project has not only strengthened my design skills but also provided me with a deeper understanding of the importance of user research, collaboration, and continuous improvement in creating successful digital products. </p>
                            <p className='mt-8'>As a Product Designer, I am proud to have contributed to this project, and I believe that the skills and expertise showcased in this case study position me as a confident product designer who has the ability to make a valuable contribution in shaping the future of digital products.</p>
                            </div>
                        </div>

                        
                        </div>

                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the users' prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the admin prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>

                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Explore live website <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>
                    </div>

                    <div className='mt-20 text-lightShade  dark:text-darkShade'>
                        <p className='mb-4'>Owari da.</p>
                        <p className=''>Arigato. <span className='text-base'>😊</span> </p>
                    </div>
                    <div className='flex flex-col'>
                    <Link to="/guild" className='flex gap-2 w-32 items-center mt-20 '>
                        <img className='h-3 rotate-[180deg] ml-6' src={next} alt="" srcSet="" />
                        <p className='text-[1rem]  leading-8 font-[500] -ml-4 text-[#fafafa]  dark:text-darkShade'>
                            Previous
                        </p>
                    </Link>
                    <div className='flex gap-2 opacity-30 w-24 items-center  self-end justify-end '>
                        <p className='text1rem] leading-8 font-[500]   '>
                            Next
                        </p>
                        <img className='h-3' src={next} alt="" srcSet="" />
                    </div>
                    </div>
                
                </section>
            </main>

        </>
    )
}

export default KODETECH
