import React from 'react'
import staffsData from '../data/staffs'
import hardHat from '../assets/hard-hat.png'
import { FiArrowUpRight } from 'react-icons/fi'
import Title from './Title'
import { Link } from 'react-router-dom'
// import {}

const Team = () => {
    return (
<section className='mt-32 mx-6 sm:mx-16'>
<div className='relative '>
<h2 className='text-5xl font-black mb-16'>
    OUR&mdash;TEAM.
</h2>
<div className='flex flex-wrap items-center justify-between'>

<img className='sm:w-[50vh]' src={hardHat} alt="yellow hard hat"  />
<p className='text-[5rem] leading-[70px] hidden sm:block sm:w-[40vh] min-w-fit bg-green-400'>The winning team.</p>
</div>
</div>
<div className='sm:flex sm:flex-wrap sm:gap-[10%]'>
{
    staffsData.map((staff,index)=>{
        return(
            <div key={index} className='text-lg mt-20 sm:w-[45%]'>
                <h3 className='text-2xl font-semibold  border-darkShade mb-4  max-w-fit'>{staff.designation}</h3>
                <p className= {staff.name.includes('ONI')? 'text-2xl font-bold':"text-lg font-semibold"}>{staff.name}</p>
                <p className='italic'>{staff.qualification}</p>
                <p className='italic'>{staff.graduating}</p>
                <p className='mt-2 opacity-75'>{staff.professionalExperience} of professional experience</p>
                {staff.link&&<Link className='flex mt-4 gap-1 items-center' to={staff.link}>
                <p className='underline'>EXPLORE MORE </p>
                < FiArrowUpRight className=' text-2xl'/>    
                </Link>}
                
            </div>
        )
    })
}
</div>
</section>
  )
}

export default Team
