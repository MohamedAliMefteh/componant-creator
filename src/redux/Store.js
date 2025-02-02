import {configureStore} from "@reduxjs/toolkit"
import stylesSlice from'./Slices/stylesSlice'
import shadowSlice from'./Slices/shadowSlice'


export default configureStore({reducer:{
    style:stylesSlice,
    shadow:shadowSlice

}})