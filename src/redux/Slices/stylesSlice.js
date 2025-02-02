import { createSlice } from "@reduxjs/toolkit";

const stylesSlice = createSlice({
  name: "style",
  initialState: {
    style: {
      content: "Button",
      width: "100px",
      height: "20px",
      borderRadius: "0px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor:"#000000",
      backgroundColor: "#ffffff",
      cursor: "",
    },
  },
  reducers: {
    updateStyle: (state, action) => {
      const { id, value } = action.payload;
      switch (id) {
        case "content":
        case "borderStyle":
        case "backgroundColor":
        case "cursor":
          case "borderColor":
          state.style[id] = value;
          break;
        default:
          state.style[id] = value + "px";
      }
    },
  },
});
export default stylesSlice.reducer;
export const { updateStyle } = stylesSlice.actions;
