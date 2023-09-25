import React from 'react'
import { useLocation } from 'react-router-dom'
import projectData from '../data/projects'
import Title from './Title'
import Section from './Section'

const Details = () => {
const location_ = useLocation()
const urlParams=new URLSearchParams(location_.search)
const titleQuery = urlParams.get('title')
const specificData=projectData[titleQuery]
const{
    text,image,tag,location,client,title
}=specificData

return (
    <div className='mt-32 mx-6 sm:mx-16'>
        <Title data={title+"."}/>
        <div className='flex flex-col gap-4 mt-12 mb-12'>
            <p className='font-semibold'>Tag| &nbsp; <span className='font-thin'>{tag}</span> </p>
            <p className='font-semibold'>Location| &nbsp;<span className='font-thin'>{location}</span></p>
            <p className='font-semibold'>For|&nbsp; <span className='font-thin'>{client}</span> </p>
        </div>
        {/* <img className='mt-6' src={imageOne} alt={imageOne} /> */}
        {/* <img className='mt-6' src={imageTwo} alt={imageOne} /> */}
        <img className='mt-6' src={image} alt={image} />
        < Section data={{title,body:text}}/>
    </div>
  )
}

export default Details
