import React from 'react'
import staffsData from '../data/staffs'
import hardHat from '../assets/hard-hat.png'
import Title from './Title'
// import {}

const Team = () => {
    return (
<section className='mt-32 mx-6 sm:mx-16'>
<div className='relative '>
<h1 className='text-5xl font-black mb-16'>
    OUR&mdash;TEAM.
</h1>
<img src={hardHat} alt="yellow hard hat"  />
</div>
{
    staffsData.map((staff,index)=>{
        return(
            
            <div key={index} className='text-lg mt-20'>
                <h1 className='text-2xl font-semibold  border-darkShade mb-4  max-w-fit'>{staff.designation}</h1>
                <p className='text-lg font-semibold'>{staff.name}</p>
                <p>{staff.qualification}</p>
                <p>{staff.graduating}</p>
                <p>{staff.professionalExperience} of professional experience</p>
            </div>
        )
    })
}
</section>
  )
}

export default Team
