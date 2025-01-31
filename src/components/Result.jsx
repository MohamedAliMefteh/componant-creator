import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  const {style}=useSelector(state=>state.style)

  return (
    <div className='result'>
      <button style={style}>Button</button>
    </div>
  )
}

export default Result