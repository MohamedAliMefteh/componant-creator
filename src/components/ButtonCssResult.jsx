import React from 'react'
import { useSelector } from 'react-redux'
import convertToCSS from '../utils/convertToCss'

const ButtonCssResult = () => {
    const {style}=useSelector((state)=>state.style)
    
  return (
    <div className='buttoncssresult'>
        <pre>
            <code>
                {convertToCSS(style)}
            </code>
        </pre>
    </div>
  )
}

export default ButtonCssResult