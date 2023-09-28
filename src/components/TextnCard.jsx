import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

const TextnCard = ({image,text,link,tag,subtext}) => {
    return (
     <Link to={link}>
        <div className='mt-12 relative'>
      <div className='relative mt-6 sm:h-[400px]'>
        
      {/* <div className='overlay bg-gradient-to-b via-transparent from-gradientShade to-transparent absolute w-full h-full'>
       <span className='mt-4 ml-6  block text-lightShade  w-[fit-content] pr-2 '>Category |</span>  
       <p className=' ml-6 text-xl uppercase text-lightShade font-semibold'>{tag}</p>  
      </div>   */}

      < FiArrowUpRight className='absolute bg-lightShade opacity-50 p-1 rounded-full  font-thin text-3xl bottom-6 right-6'/>



      <img src={image} alt={tag} className='sm:object-cover sm:h-full' />
      </div>
      <div className='py-6 flex justify-between gap-2  font-medium '>
      <p className='  uppercase leading-8 underline  underline-offset-4'>{text}</p>
      <p className=' uppercase leading-8 min-w-fit  '>{subtext}</p>

      </div>
    </div>
    </Link>
  )
}

export default TextnCard
