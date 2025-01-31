import React from "react";

const Input = ({ classname, id, handleChange, value, title }) => {
  return (
    <div className={`${classname || ""} params`}>
      <label htmlFor={id}>{title}</label>
      <input
        type="range"
        id={id}
        min="0"
        max="300"
        value={value[id]}
        onChange={(e) => handleChange(e)}
      />

      <input
        className="valueresult"
        type="number"
        id={id}
        value={value[id]}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
