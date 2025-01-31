import React, { useState } from "react";
import { updateStyle } from "../redux/Slices/stylesSlice";
import { useDispatch } from "react-redux";

import Input from "./Input";

const Settings = () => {
  const [value, setValue] = useState({
    width: 100,
    height: 20,
    borderRadius: 0,
    borderWidth: 0,
    borderStyle: "",
    backgroundColor: "",
    cursor: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(updateStyle({ id: e.target.id, value: e.target.value }));
    setValue((prevValue) => {
      const id = e.target.id;
      const value = e.target.value;
      return { ...prevValue, [id]: value };
    });
  };

  return (
    <div className="settings">
      <div className="dimensions container">
        <h2>Dimensions:</h2>
        <Input
          classname={"width"}
          title={"width"}
          id={"width"}
          handleChange={handleChange}
          value={value}
        />
        <Input
          classname={"height"}
          title={"height"}
          id={"height"}
          handleChange={handleChange}
          value={value}
        />
      </div>

      <div className="border container ">
        <h2>Border:</h2>
        <Input
          classname={"borderradius"}
          title={"Border Radius"}
          id={"borderRadius"}
          handleChange={handleChange}
          value={value}
        />
        <Input
          classname={"borderwidth"}
          title={"Border Width"}
          id={"borderWidth"}
          handleChange={handleChange}
          value={value}
        />

        <div className="borderstyle params">
          <label htmlFor="borderstyle">Border Style</label>
          <input
            // type="range"
            id="borderstyle"
            min="0"
            max="100"
            value={value.borderStyle}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="background container">
        <h2>Background:</h2>
        <div className="backgroundcolor params">
          <label htmlFor="backgroundcolor">Background Color</label>
          <input id="backgroundcolor" />
        </div>
      </div>

      <div className="cursor container ">
        <h2>Cursor:</h2>
        <div className="cursortype params">
          <label htmlFor="cursor">Cursor</label>
          <input id="cursor" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
