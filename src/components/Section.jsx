import React from 'react'

const Section = ({data}) => {
  return (
    <div>
      <h2 className='mb-6 mt-6 text-transluscent'>{data.title}</h2>
      <p dangerouslySetInnerHTML= {{__html:data.body}}/>
    </div>
  )
}

export default Section