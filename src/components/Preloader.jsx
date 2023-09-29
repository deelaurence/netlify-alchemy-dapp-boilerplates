import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import AnimationRenderer from './Lottie'
import animationFile from '../data/animation'

import hardHat from '../assets/hard-hat.png';
import beHappieFourWebp from '../assets/webp/be-happie-four.webp';
import beHappieOneWebp from '../assets/webp/be-happie-one.webp';
import beHappieThreeWebp from '../assets/webp/be-happie-three.webp';
import beHappieTwoWebp from '../assets/webp/be-happie-two.webp';
import brickUncompletedWebp from '../assets/webp/brick_uncompleted.webp';
import bulltoothWebp from '../assets/webp/bulltooth.webp';
import coverWebp from '../assets/webp/cover.webp';
import futaOneWebp from '../assets/webp/futa-one.jpg';
import futaTwoWebp from '../assets/webp/futa-two.webp';
import idahOneWebp from '../assets/webp/idah-one.webp';
import ifserarThreeWebp from '../assets/webp/ifserar-three.webp';
import ifserarTwoWebp from '../assets/webp/ifserar-two.webp';
import motorizedBoreholeWebp from '../assets/webp/motorized-borehole.webp';
import oauOneWebp from '../assets/webp/oau-one.webp';
import oauThreeWebp from '../assets/webp/oau-three.webp';
import olujiOneWebp from '../assets/webp/oluji-one.webp';
import olujiTwoWebp from '../assets/webp/oluji-two.webp';
import planWebp from '../assets/webp/plan.webp';
import volleyballOneWebp from '../assets/webp/volleyball-one.webp';
import wndpTwoWebp from '../assets/webp/wndp-two.webp';
import crinOneJpg from '../assets/webp/crin-one.jpg';
import crinThreeJpg from '../assets/webp/crin-three.jpg';
import crinTwoJpg from '../assets/webp/crin-two.jpg';
import culvertOneJpg from '../assets/webp/culvert-one.jpg';
import culvertThreeJpg from '../assets/webp/culvert-three.jpg';
import culvertTwoJpg from '../assets/webp/culvert-two.jpg';
import idahTwoJpg from '../assets/webp/idah-two.jpg';
import ifserarOneJpg from '../assets/webp/ifserar-one.jpg';
import motorizedBoreholeJpg from '../assets/webp/motorized-borehole.jpg';
import oauTwoJpg from '../assets/webp/oau-two.jpg';
import olujiEightJpg from '../assets/webp/oluji-eight.jpg';
import olujiFourJpg from '../assets/webp/oluji-four.jpg';
import olujiSevenJpg from '../assets/webp/oluji-seven.jpg';
import olujiSixJpg from '../assets/webp/oluji-six.jpg';
import olujiThreeJpg from '../assets/webp/oluji-three.jpg';
import roadConstructionFiveJpg from '../assets/webp/road-construction-five.jpg';
import roadConstructionFourJpg from '../assets/webp/road-construction-four.jpg';
import roadConstructionOneJpg from '../assets/webp/road-construction-one.jpg';
import roadConstructionThreeJpg from '../assets/webp/road-construction-three.jpg';
import roadConstructionTwoJpg from '../assets/webp/road-construction-two.jpg';
import roadRenovationFourJpg from '../assets/webp/road-renovation-four.jpg';
import roadRenovationOneJpg from '../assets/webp/road-renovation-one.jpg';
import roadRenovationThreeJpg from '../assets/webp/road-renovation-three.jpg';
import roadRenovationTwoJpg from '../assets/webp/road-renovation-two.jpg';
import solarBoreholeJpg from '../assets/webp/solar-borehole.jpg';
import volleyballTwoJpg from '../assets/webp/volleyball-two.jpg';
import wndpOneJpg from '../assets/webp/wndp-one.jpg';



const Preloader = ({ pullData }) => {
    const seaRef = useRef(null)
    const barRef = useRef(null)
    const bar2Ref = useRef(null)
    const location = document.location;
    const bar = barRef.current
    const bar2 = bar2Ref.current
    const text = document.querySelector('.preload-text')
    const text2 = document.querySelector('.preload-text2')
    const percentage = document.querySelector('.percentage')
    const fetching = document.querySelector('.fetching')
    const clocking = document.querySelector('.clocking')
    const locationDom = document.querySelector('.location')
    const preloadTextRef = useRef(null)
    const preloadText2Ref = useRef(null)
    let [progress, setProgress] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')
    let [imgLoaded, setImageLoaded] = useState(false)
    let [fadeAnimation, setFadeAnimation] = useState(false)
    let [animation, setAnimation] = useState(false)
    let [status, setStatus] = useState(0)
    let time;
    let [pseudoStatus, setPseudoStatus] = useState(0)
    pullData(imgLoaded)
    const domImages = document.querySelectorAll("img")
    setTimeout(() => {
        setAnimation(true)
    }, 2000);
    const getImage = async () => {
        domImages.forEach((image, index) => {
            image.addEventListener("load", () => {
                setProgress(progress.push(index))
            
                setStatus(progress.length)
            
                if (progress.length / domImages.length * 100 > 90) {
                    
                    setTimeout(() => {
                        setImageLoaded(true)
                    }, 10000);
                    setTimeout(() => {
                        setFadeAnimation(true)
                        percentage.innerHTML = "Hello"
                        percentage.style.transform = "translateY(-50px)"
                        fetching.style.transform = "translateY(-50px)"
                        percentage.style.opacity = 0
                        fetching.style.opacity = 0
                        bar.style.width = "94%"
                        bar.style.transform = "translateY(-50px)"
                        bar2.style.transform = "translateY(-50px)"
                        clocking.style.transform = "translateY(-50px)"
                        locationDom.style.transform = "translateY(-50px)"
                        bar.style.opacity = 0
                        bar2.style.opacity = 0
                        clocking.style.opacity = 0
                        locationDom.style.opacity = 0
                        text2.style.opacity = 0
                        text2.style.opacity = 0
                        text2.style.transform = "translateY(-100px)"
                        text2.style.transition = "2s"
                    }, 9000);
                }
                if (progress.length == domImages.length) {
                    setTimeout(() => {

                    }, 15000);
                }
            })
        })
    }
    setTimeout(() => {
    }, 60000);

    if (bar) {
        bar.style.width = `${status / domImages.length * 96}%`

    }


    useEffect(() => {
        if (percentage) {

            percentage.style.transform = "translateY(0px)"
            percentage.style.opacity = 1
            bar.style.transform = "translateY(0px)"
            bar2.style.transform = "translateY(0px)"
            clocking.style.transform = "translateY(0px)"
            locationDom.style.transform = "translateY(0px)"
            bar.style.opacity = 1
            bar2.style.opacity = 1
            clocking.style.opacity = 1
            locationDom.style.opacity = 1
        }
        setCurrentLocation(location)
        getImage()

        let timeLapse = setInterval(() => {
            if (pseudoStatus == 100) {
                return
            }
            else {
                setPseudoStatus(pseudoStatus++)
            }
        }, 200);

        return () =>
            clearInterval(timeLapse)

    }, [currentLocation])

    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(text, {
                opacity: "0"
            }, {
                opacity: 1,
                duration: 2,

                skewX: "0deg",
            })
            
            gsap.fromTo(text, {
            }, {
                opacity: 0,
                duration: 3,
                delay: 5,
            })
            gsap.fromTo(text2, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 2,
                delay: 9,
            })
        }, 1000)
    }, [animation])

    const clockRef = useRef(null)
    const clock = clockRef.current
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const day = currentTime.getDay()
    const weekdays = ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"]
    let newHour;
    let newSeconds;
    let newMinute
    let amPm;
    hours > 12 ? newHour = hours % 12 : newHour = hours
    hours > 12 ? amPm = "pm" : amPm = "am"
    seconds < 10 ? newSeconds = `0${seconds}` : newSeconds = seconds
    minutes < 10 ? newMinute = `0${minutes}` : newMinute = minutes

    let fullTime = `${weekdays[day]}/${newHour}:${newMinute}:${newSeconds} ${amPm}`
    time = fullTime
    const clockUpdate = setInterval(() => {
        time = fullTime
    }, 1000)

    return (
        <div className='h-[95vh] relative px-2 text-neutral-700 text-8xl font-bold  w-screen bg-darkShade'>
            <div  className='hidden opacity-0 h-[1px] w-[96%] absolute -translate-y-[50px] bottom-4 bar bg-neutral-700 rounded-full'></div>
            <div ref={barRef} className='hidden opacity-0 h-[1px] absolute bottom-4 -translate-y-[50px] bar bg-neutral-200 rounded-full'></div>
            <p className='location -translate-y-[50px] absolute opacity-0 text-base text-neutral-500 bottom-[124px]'>\Ondo &mdash; NG</p>
            <p ref={clockRef} className='clocking -translate-y-[50px] opacity-0 absolute text-base bottom-[144px] text-neutral-400'>{time ? `${time.toUpperCase()}` : "Calibrating Time..."}</p>

            <div ref={bar2Ref} className='duration-1000'>

            <AnimationRenderer style={fadeAnimation?"opacity-0":""} />
            </div>
            <p className='text-lg duration-500 fetching text-white opacity-50 font-thin absolute bottom-[184px]'>Fetching resources please wait...</p>
            <h1 className='percentage absolute -translate-y-[50px] bottom-[60px] text-4xl text-neutral-200' >
                {status ? ` ${Math.floor(progress / domImages.length * 100)}%` : "0%"}
                {/* {status ? ` ${pseudoStatus}%` : "0%"} */}
            </h1>
            <div ref={preloadTextRef} className='right-6 opacity-0 preload-text [&>*]:overflow-visible flex flex-col font-medium absolute overflow-visible top-4 text-white text-4xl' >
                <p> Onicon <span className='text-neutral-500'>Resources</span></p>
                <p>Limited.</p>
            </div>

            <div ref={preloadText2Ref} className='opacity-0 preload-text2 [&>*]:overflow-visible right-4 flex flex-col font-medium absolute overflow-visible top-4 text-white text-3xl' >
                <p> You  <span className='text-neutral-500'>deserve</span></p>
                <p> Top &mdash; tier <span className='text-neutral-500'>engineering.</span></p>
            </div>

            <div className="h-0 [&>*]:h-0">
                <img src={beHappieFourWebp} className='floImg -z-[100] h-10' alt="Be Happie Four" />
                <img src={beHappieOneWebp} className='floImg -z-[100] h-10' alt="Be Happie One" />
                <img src={beHappieThreeWebp} className='floImg -z-[100] h-10' alt="Be Happie Three" />
                <img src={beHappieTwoWebp} className='floImg -z-[100] h-10' alt="Be Happie Two" />
                <img src={brickUncompletedWebp} className='floImg -z-[100] h-10' alt="Brick Uncompleted" />
                <img src={bulltoothWebp} className='floImg -z-[100] h-10' alt="Bulltooth" />
                <img src={coverWebp} className='floImg -z-[100] h-10' alt="Cover" />
                <img src={futaOneWebp} className='floImg -z-[100] h-10' alt="Futa One" />
                <img src={futaTwoWebp} className='floImg -z-[100] h-10' alt="Futa Two" />
                <img src={idahOneWebp} className='floImg -z-[100] h-10' alt="Idah One" />
                <img src={ifserarThreeWebp} className='floImg -z-[100] h-10' alt="Ifserar Three" />
                <img src={ifserarTwoWebp} className='floImg -z-[100] h-10' alt="Ifserar Two" />
                <img src={motorizedBoreholeWebp} className='floImg -z-[100] h-10' alt="Motorized Borehole" />
                <img src={oauOneWebp} className='floImg -z-[100] h-10' alt="OAU One" />
                <img src={oauThreeWebp} className='floImg -z-[100] h-10' alt="OAU Three" />
                <img src={olujiOneWebp} className='floImg -z-[100] h-10' alt="Oluji One" />
                <img src={olujiTwoWebp} className='floImg -z-[100] h-10' alt="Oluji Two" />
                <img src={planWebp} className='floImg -z-[100] h-10' alt="Plan" />
                <img src={volleyballOneWebp} className='floImg -z-[100] h-10' alt="Volleyball One" />
                <img src={wndpTwoWebp} className='floImg -z-[100] h-10' alt="WNDP Two" />
                <img src={crinOneJpg} className='floImg -z-[100] h-10' alt="Crin One" />
                <img src={crinThreeJpg} className='floImg -z-[100] h-10' alt="Crin Three" />
                <img src={crinTwoJpg} className='floImg -z-[100] h-10' alt="Crin Two" />
                <img src={culvertOneJpg} className='floImg -z-[100] h-10' alt="Culvert One" />
                <img src={culvertThreeJpg} className='floImg -z-[100] h-10' alt="Culvert Three" />
                <img src={culvertTwoJpg} className='floImg -z-[100] h-10' alt="Culvert Two" />
                <img src={idahTwoJpg} className='floImg -z-[100] h-10' alt="Idah Two" />
                <img src={ifserarOneJpg} className='floImg -z-[100] h-10' alt="Ifserar One" />
                <img src={motorizedBoreholeJpg} className='floImg -z-[100] h-10' alt="Motorized Borehole" />
                <img src={oauTwoJpg} className='floImg -z-[100] h-10' alt="OAU Two" />
                <img src={olujiEightJpg} className='floImg -z-[100] h-10' alt="Oluji Eight" />
                <img src={olujiFourJpg} className='floImg -z-[100] h-10' alt="Oluji Four" />
                <img src={olujiSevenJpg} className='floImg -z-[100] h-10' alt="Oluji Seven" />
                <img src={olujiSixJpg} className='floImg -z-[100] h-10' alt="Oluji Six" />
                <img src={olujiThreeJpg} className='floImg -z-[100] h-10' alt="Oluji Three" />
                <img src={roadConstructionFiveJpg} className='floImg -z-[100] h-10' alt="Road Construction Five" />
                <img src={roadConstructionFourJpg} className='floImg -z-[100] h-10' alt="Road Construction Four" />
                <img src={roadConstructionOneJpg} className='floImg -z-[100] h-10' alt="Road Construction One" />
                <img src={roadConstructionThreeJpg} className='floImg -z-[100] h-10' alt="Road Construction Three" />
                <img src={roadConstructionTwoJpg} className='floImg -z-[100] h-10' alt="Road Construction Two" />
                <img src={roadRenovationFourJpg} className='floImg -z-[100] h-10' alt="Road Renovation Four" />
                <img src={roadRenovationOneJpg} className='floImg -z-[100] h-10' alt="Road Renovation One" />
                <img src={roadRenovationThreeJpg} className='floImg -z-[100] h-10' alt="Road Renovation Three" />
                <img src={roadRenovationTwoJpg} className='floImg -z-[100] h-10' alt="Road Renovation Two" />
                <img src={solarBoreholeJpg} className='floImg -z-[100] h-10' alt="Solar Borehole" />
                <img src={volleyballTwoJpg} className='floImg -z-[100] h-10' alt="Volleyball Two" />
                <img src={wndpOneJpg} className='floImg -z-[100] h-10' alt="WNDP One" />
                <img src={hardHat} className='floImg -z-[100] h-10' alt="hard hat" />
            </div>
        </div>
    )
}

export default Preloader
