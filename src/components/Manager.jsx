import React from 'react'
import Section from './Section'
import manager from '../data/manager'
import Title from './Title'
import ceo from "../assets/webp/manager.jpg"


const Manager = () => {
  return (
    <div className='mx-6 sm:mx-16 mt-32 flex gap-12 flex-col'>
    <Title style="my-6 uppercase font-medium  text-center text-5xl" data="Managing Director."/>
    <img  className='sm:h-[300px] self-center' src={ceo} alt="" />
    <Section data={{title:"About",body:manager[0]}}/>
    <Section data={{title:"Onicon",body:manager[1]}}/>
    </div>
  )
}

export default Manager
