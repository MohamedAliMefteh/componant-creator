import React from 'react'
import { useSelector } from 'react-redux'
import hexToRgba from '../utils/convertHexToRgba'

const ShadowCssResult = () => {
    const {shadow}=useSelector(state=>state.shadow)
    const shadowcolor=  hexToRgba(shadow.shadowColor,shadow.shadowOpacity)
  const  boxShadow=`${shadow.horizontal}px ${shadow.vertical}px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${shadowcolor}`
  return (
    <div className='shadowcssresult'>
        <pre>
            <code>
                {`box-shadow:${boxShadow}`}
            </code>
        </pre>
    </div>
  )
}

export default ShadowCssResult