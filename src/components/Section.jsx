import React from 'react'

const Section = ({data}) => {
  return (
    <div>
      <h2 className='mb-6 mt-12 text-transluscent'>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}

export default Section