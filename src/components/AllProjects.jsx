import React from 'react'
import projectData_ from '../data/projects'
import TextnCard from './TextnCard'
import Title from './Title'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const AllProjects = () => {
const location = useLocation()
const urlParams=new URLSearchParams(location.search)
const category= urlParams.get('category')
let projectData;
if(category){
  projectData=projectData_.filter((project)=>{
    return project.tag == category.toUpperCase()
  })
}
else{
  projectData=projectData_
}

  return (
    <div className='mt-32 mx-6 sm:mx-16'>
        <Title data="Selected projects"/>
        <div className='  mt-10 flex gap-6'>
          <Link to="/all-projects/" className={category==null?'underline':"border-b-transparent"}>All.</Link>
          <Link to="/all-projects/?category=civil" className={category=="civil"?'underline':""}>Civil.</Link>
          <Link to="/all-projects/?category=building" className={category=="building"?'underline':""}>Building.</Link>
          <Link to="/all-projects/?category=water" className={category=="water"?'underline':""}>Water.</Link>
        </div>
        <div className='sm:flex flex-wrap  gap-[2%] [&>*]:w-[49%]   '>
       {
        projectData.map((data,index)=>{
          return(
            <TextnCard key={index} tag={data.tag} image={data.image} subtext={data.tag} text={data.title} link={data.link} />
            )
        })

      }
      </div>
    </div>
  )
}

export default AllProjects
