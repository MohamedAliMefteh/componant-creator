import React from "react";

const NavBar = ({setSection}) => {
  return (
    <div className="navbar">
      <h2>CSS Generator</h2>
      <ul>
      <li  onClick={()=>setSection('home')}>Home</li>
        <li  onClick={()=>setSection('buttons')}>Buttons</li>
        <li  onClick={()=>setSection('shadows')}>Shadows</li>
        <li onClick={()=>setSection('inputs')} >Inputs</li>
      </ul>
    </div>
  );
};

export default NavBar;
