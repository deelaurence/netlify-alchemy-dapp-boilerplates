import { Link, useLocation } from 'react-router-dom'

import React from 'react'
import Menu from './Menu'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
const Navbar = ({ locationProps }) => {
  const location = useLocation()
  let html = document.querySelector("html")
  let toggle = document.querySelector('.toggle')
  const [activeWork, setActiveWork] = useState(true);
  const [activeProjects, setActiveProjects] = useState(false);
  const [activeTeam, setActiveTeam] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [refreshBlendBar, setRefreshBlendBar] = useState(false)
  const [currentLocation, setCurrentLocation] = useState("")
  
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos+2) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  
  useEffect(() => {
    setCurrentLocation(location)
    if (locationProps.href.includes('about')) {
      //('about');
      setActiveAbout(true)
      setActiveWork(false)
      setActiveProjects(false)
      return
    }
    if (locationProps.href.includes('projects')) {
      //('Projects active');
      setActiveProjects(true)
      setActiveAbout(false)
      setActiveWork(false)
      return
    }
    if (locationProps.href.includes('team')) {
      //('Projects active');
      setActiveTeam(true)
      setActiveAbout(false)
      setActiveWork(false)
      return
    }
    else {
      setActiveAbout(false)
      setActiveProjects(false)
      setActiveWork(true)
      return
    }
  }, [location])

  const handleActiveAbout = () => {
    setActiveAbout(true)
    setActiveTeam(false)
    setActiveWork(false)
    setActiveProjects(false)
  }
  const handleActiveProjects = () => {
    setActiveAbout(false)
    setActiveWork(false)
    setActiveTeam(false)
    setActiveProjects(true)
  }
  const handleActiveWork = () => {
    setActiveAbout(false)
    setActiveWork(true)
    setActiveTeam(false)
    setActiveProjects(false)
  }
  const handleActiveTeam = () => {
    setActiveAbout(false)
    setActiveWork(false)
    setActiveTeam(true)
    setActiveProjects(false)
  }

  useEffect(() => {
    let updateNavbar = setTimeout(() => {
      setRefreshBlendBar(true)
    }, 1000);
    return () =>
      clearTimeout(updateNavbar)

  })


  let blendBar = document.querySelector('.blend-bar')
  // //(blendBar);


  
  const [menu, setMenu] = useState(false)
  
  const hideMenu = () => {
    setMenu(false)
    setTimeout(() => {
      blendBar.style.mixBlendMode = "difference"
    }, 1000);
  }

  const showMenu = () => {
    setTimeout(() => {
      blendBar.style.mixBlendMode = "normal"
    }, 100);

    if (blendBar) {
      setMenu(true)
    }
  }

  let test = false;
  return (
    <nav
      className={menu ? "px-6  blend-bar fixed nav z-[1] flex py-5 items-center justify-between w-screen text-lightShade  dark:bg-lightShade dark:text-darkShade sm:px-16 absolute-nav" : "px-6 blend-bar fixed nav z-[1000] flex py-5 items-center justify-between w-screen text-lightShade dark:bg-lightShade dark:text-darkShade sm:px-16  absolute-nav mix-blend-difference"}
    >
      <div className={scrollDirection=="up"?"flex justify-between items-center w-full duration-[1s]":"duration-[1s] -translate-y-[100px] flex justify-between items-center w-full"}>
      <Link to="/">
        <div
          className="flex gap-1 blend-bar-child overflow-hidden">
          <p
            onClick={handleActiveWork}
            className="self-end onicon -mb-1 font-regular text-lg">onicon.</p>
        </div>
      </Link>
      <div className={menu ? 'nav-menu fixed z-[99999] left-0 -top-20  bg-darkShade dark:bg-lightShade dark:text-darkShade sm:hidden' :
        'nav-menu fixed left-0 -top-[1000px]  bg-darkShade dark:bg-lightShade dark:text-darkShade  sm:hidden'}>
        <Menu locationProps={locationProps} location={location} menu={menu} hideMenu={hideMenu} />
      </div>
      <div className="sm:hidden flex  gap-1 self-end ">
       
       {/* //menu here */}
      
      
      
      
        <p onClick={showMenu} className='text-base font-regular show-menu text-lightShade dark:bg-lightShade dark:text-darkShade' >menu</p>
      
      
      
      
      
      </div>



      <div className="hidden sm:flex  gap-10 [&>*]:dark:bg-lightShade [&>*]:dark:text-darkShade self-end ">
        <div className='relative pr-2'>
        <div className={activeWork?'bg-blue-400 h-2 w-2 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-blue-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
        <p onClick={handleActiveWork} className={activeWork ? 'text-white text-sm font-medium ' : ' text-sm font-regular text-opaque'} ><Link to='/'>HOME</Link></p>
        </div>
        <div className='relative pr-2'>
        <div className={activeProjects?'bg-blue-400 h-2 w-2 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-blue-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
        <p onClick={handleActiveProjects} className={activeProjects ? 'text-sm font-medium text-white ' : ' text-sm font-regular text-opaque'} ><Link to='/all-projects'>PROJECTS</Link></p>
        </div>
        <div className='relative pr-2'>
        <div className={activeTeam?'bg-blue-400 h-2 w-2 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-blue-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
        <p onClick={handleActiveTeam} className={activeTeam ? 'text-sm font-medium text-white ' : ' text-sm font-regular text-opaque'} ><Link to='/team'>TEAM</Link></p>
        </div>
        <div className='relative pr-2'>
        <div className={activeAbout?'bg-blue-400 h-2 w-2 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-blue-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
        <p onClick={handleActiveAbout} className={activeAbout ? 'text-sm font-medium text-white ' : ' text-sm font-regular text-opaque'} ><Link to='/about'>ABOUT US</Link></p>
        </div>
      </div>
      </div>
    </nav>

  )
}

export default Navbar
