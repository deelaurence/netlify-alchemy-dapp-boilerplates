import React from 'react'
import Section from './Section'
import about from '../data/about'
import Title from './Title'
import {Link} from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='mt-32 mx-6 sm:mx-16'>
        {about.map((datum)=>{
            return(
                <div className='mt-12 flex flex-col'>
                    {datum.superTitle&&<Title data={datum.superTitle}/>}
                    <Section data={{title:`${datum.title}`,body:`${datum.text}`}}/>
                    {datum.textTwo&&<Section data={{title:datum.titleTwo,body:`${datum.textTwo}`}}/>}
                    <img className="mt-8 max-h-screen self-center " src={datum.image} alt="" />
                </div>
            )})
        }
    </div>
  )
}

export default AboutUs
