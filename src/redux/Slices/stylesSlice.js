import { createSlice } from "@reduxjs/toolkit";

const stylesSlice = createSlice({
  name: "style",
  initialState: {
    style: {
      width: "100"+'px',
      height: "20"+'px',
      borderRadius: "0"+'px',
      borderWidth: "1"+'px',
      borderStyle: "solid",
      backgroundColor: "",
      cursor: "",
    }
  },
  reducers: {
    updateStyle: (state, action) => {
      const { id, value } = action.payload;
      switch (id) {
        case "width":
          state.style.width = value+'px';
          break;
        case "height":
          state.style.height = value +'px' ;
          break;
        case "borderRadius":
          state.style.borderRadius = value +'px';
          break;
        case "borderWidth":
          state.style.borderWidth = value +'px';
          break;
        case "fontweight":
          state.style.fontWeight = value +'px';
          break;
        default:
            return
      }
    },
  },
});
export default stylesSlice.reducer;
export const { updateStyle} = stylesSlice.actions;
