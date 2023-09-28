import React from 'react'

const Title = ({data,style}) => {
  return (
    <div>
      <h2 className={!style?'text-3xl uppercase':style}>{data}</h2>
    </div>
  )
}

export default Title
