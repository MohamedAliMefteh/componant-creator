import { useSelector } from 'react-redux'

const Result = () => {
  const {style}=useSelector(state=>state.style)

  return (
    <div className='result'>
      <button style={style}>{style.content}</button>
    </div>
  )
}

export default Result