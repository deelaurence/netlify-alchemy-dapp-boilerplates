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
console.log(category);
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
        <div className='[&>*]:border-b mt-10 flex gap-6'>
          <Link to="/all-projects/" className={category==null?'border-b-darkShade':""}>All.</Link>
          <Link to="/all-projects/?category=building" className={category=="building"?'border-b-darkShade':""}>Building.</Link>
          <Link to="/all-projects/?category=water" className={category=="water"?'border-b-darkShade':""}>Water.</Link>
          <Link to="/all-projects/?category=civil" className={category=="civil"?'border-b-darkShade':""}>Civil.</Link>
        </div>
       {
        projectData.map((data,index)=>{
          return(
            <TextnCard key={index} tag={data.tag} image={data.image} text={data.text} link={data.link} />
            )
        })

      }
    </div>
  )
}

export default AllProjects
