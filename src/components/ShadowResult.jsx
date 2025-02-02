import React from 'react'
import { useSelector } from 'react-redux'
import hexToRgba from '../utils/convertHexToRgba'

const ShadowResult = () => {
    const {shadow}=useSelector(state=>state.shadow)
    const shadowcolor=  hexToRgba(shadow.shadowColor,shadow.shadowOpacity)
 console.log(shadowcolor)
    const style={backgroundColor:shadow.boxColor,
        boxShadow:`${shadow.horizontal}px ${shadow.vertical}px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${shadowcolor}`}
 
  return (
    <div className='boxcontainer' style={style} ></div>
  )
}

export default ShadowResult