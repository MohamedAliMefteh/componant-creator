import { updateStyle } from "../redux/Slices/stylesSlice";


const handleChange = (dispatch,setValue,e) => {
    dispatch(updateStyle({ id: e.target.id, value: e.target.value }));
    setValue((prevValue) => {
      const id = e.target.id;
      const value = e.target.value;
      return { ...prevValue, [id]: value };
    });
  };
  export default handleChange