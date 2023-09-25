import React from 'react'
import { Link } from 'react-router-dom'

const TextnCard = ({image,text,link,tag}) => {
    return (
     <Link to={link}>
        <div className='mt-12 relative'>
      <div className='relative mt-6'>
        
      <div className='overlay bg-gradient-to-b via-transparent from-gradientShade to-transparent absolute w-full h-full'>
       <span className='mt-4 ml-6  block text-lightShade  w-[fit-content] pr-2 '>Category |</span>  
       <p className=' ml-6 text-xl uppercase text-lightShade font-semibold'>{tag}</p>  
      </div>  
      <img src={image} alt={tag} />
      </div>
      <div className='py-6 flex '>
      <p className=' text-lg border-l  border-l-darkShade px-6 leading-8 ' dangerouslySetInnerHTML={{__html:text}}/>

      </div>
    </div>
    </Link>
  )
}

export default TextnCard
