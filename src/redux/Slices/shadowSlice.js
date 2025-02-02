import { createSlice } from "@reduxjs/toolkit";

const shadowSlice = createSlice({
  name: "shadow",
  initialState: {
    shadow: {
      horizontal:0,
      vertical:0,
      blurRadius:0,
      spreadRadius:0,
      shadowOpacity:1,
      shadowColor:"#000000",
      boxColor:"#000000",
    },
  },
  reducers: {
    updateShadow: (state, action) => {
      const {id,value}=action.payload
      state.shadow[id]=value
    },
  },
});
export default shadowSlice.reducer;
export const { updateShadow } = shadowSlice.actions;
