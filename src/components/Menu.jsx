import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
const Menu = ({ hideMenu, menu, locationProps,location }) => {

    const [activeWork, setActiveWork] = useState(true);
    const [activeProjects, setActiveProjects] = useState(false);
    const [activeTeam, setActiveTeam] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);

    useEffect(() => {
    if (locationProps.href.includes('team')) {
      //('Team');
      setActiveTeam(true)
      setActiveWork(false)
      setActiveProjects(false)
      return
    }
    if (locationProps.href.includes('projects')) {
      //('Projects active');
      setActiveProjects(true)
      setActiveWork(false)
      setActiveTeam(false)
      return
    }
    if (locationProps.href.includes('about')) {
      //('Projects active');
      setActiveAbout(true)
      setActiveWork(false)
      setActiveTeam(false)
      return
    }
    else {
      setActiveTeam(false)
      setActiveProjects(false)
      setActiveWork(true)
      return
    }
  }, [location])
    const handleActiveWork = () => {
        setActiveWork(true)
        setActiveProjects(false)
        setActiveTeam(false)
        setActiveAbout(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveProjects = () => {
        setActiveWork(false)
        setActiveProjects(true)
        setActiveTeam(false)
        setActiveAbout(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveTeam = () => {
        setActiveWork(false)
        setActiveProjects(false)
        setActiveTeam(true)
        setActiveAbout(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveAbout = () => {
        setActiveWork(false)
        setActiveProjects(false)
        setActiveTeam(false)
        setActiveAbout(true)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }

    return (
        <>
            <p onClick={hideMenu} className='text-lg tracking-[0.5px] text-lightShade dark:bg-lightShade dark:text-darkShade absolute top-32 right-6 ' >close</p>
            <div className={menu ? '[&>*]:mx-6 items-start nav-animate dark:bg-lightShade dark:text-darkShade flex text-lightShade transition-[2s] justify-center w-screen h-[100vh]  mt-20 gap-12  flex-col font-medium text-2xl' :
                'items-start nav1-animate [&>*]:mx-6 dark:bg-lightShade dark:text-darkShade  transition-[2s]  flex text-lightShade justify-center w-screen h-[100vh]  mt-20 gap-12  flex-col font-medium text-2xl'}>
                <Link className='relative  pr-4' to='/'>
                    <div className={activeWork?'bg-orange-400 h-3 w-3 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-orange-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveWork} className={activeWork ? 'text-white' : 'text-opaque'}>HOME</p>
                </Link>
                <Link className='relative pr-4' to="/all-projects">
                    <div className={activeProjects?'bg-orange-400 h-3 w-3 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-orange-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveProjects} className={activeProjects ? 'text-white' : 'text-opaque '}>OUR PROJECTS</p>
                </Link>
                <Link className='relative pr-4' to="/team">
                     <div className={activeTeam?'bg-orange-400 h-3 w-3 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-orange-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveTeam} className={activeTeam ? 'text-white' : 'text-opaque'} >OUR TEAM</p>
                </Link>
                <Link className='relative pr-4' to="/about">
                     <div className={activeAbout?'bg-orange-400 h-3 w-3 rounded-full  transition-[1.5s] absolute top-[40%] right-0':'bg-orange-400 h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveAbout} className={activeAbout ? 'text-white' : 'text-opaque'}>ABOUT US</p>
                </Link>
            </div>
        </>
    )
}

export default Menu
