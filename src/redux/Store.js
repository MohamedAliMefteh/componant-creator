import {configureStore} from "@reduxjs/toolkit"
import stylesSlice from'./Slices/stylesSlice'


export default configureStore({reducer:{
    style:stylesSlice

}})