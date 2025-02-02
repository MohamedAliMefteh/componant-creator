import React from 'react'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { updateShadow } from '../redux/Slices/shadowSlice'

const ShadowSettings = () => {
    const {shadow}=useSelector(state=>state.shadow)

    const dispatch = useDispatch()
    const handler=(e)=>{
        dispatch(updateShadow({id:e.target.id,value:e.target.value}))
    }
  return (
    <div className='shadowsettings'>
        <Input
        classname={'horizontal'}
        type={'range'}
        id={'horizontal'}
        onChangeHandler={handler}
        value={shadow}
        title={'Horizontal Length'}
        min={'-200'}
        max={'200'}
        />
        <Input
        classname={'vertical'}
        type={'range'}
        id={'vertical'}
        onChangeHandler={handler}
        value={shadow}
        title={'Vertical Length'}
        min={'-200'}
        max={'200'}
        />
        <Input
        classname={'blurradius'}
        type={'range'}
        id={'blurRadius'}
        onChangeHandler={handler}
        value={shadow}
        title={'Blur Radius'}
        min={'0'}
        max={'300'}
        />
        <Input
        classname={'spreadradius'}
        type={'range'}
        id={'spreadRadius'}
        onChangeHandler={handler}
        value={shadow}
        title={'Spread Radius'}
        min={'-200'}
        max={'200'}
        />
        <Input
        classname={'shadowopacity'}
        type={'range'}
        id={'shadowOpacity'}
        onChangeHandler={handler}
        value={shadow}
        title={'Shadow Opacity'}
        step={'0.01'}
        min={'0'}
        max={'1'}
        />
        <Input
        classname={'shadowcolor'}
        type={'color'}
        id={'shadowColor'}
        onChangeHandler={handler}
        value={shadow}
        title={'Shadow Color'}
        />
        <Input
        classname={'boxcolor'}
        type={'color'}
        id={'boxColor'}
        onChangeHandler={handler}
        value={shadow}
        title={'Box Color'}
        />
    </div>
  )
}

export default ShadowSettings