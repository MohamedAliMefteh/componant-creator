import React, { useState } from "react";
import { useDispatch } from "react-redux";
import handleChange from "../utils/handleChange";

import Input from "./Input";

const Settings = () => {
  const [value, setValue] = useState({
    content:'Button',
    width: 100,
    height: 20,
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor:"#000000",
    backgroundColor: "#ffffff",
    cursor: "",
  });
  const dispatch = useDispatch();
  const onChangeHandler=(e)=>{
    handleChange(dispatch,setValue,e)
  }

  return (
    <div className="settings">
      <div className="content container" >
        <h2>Content:</h2>
        <Input
        classname={"content"}
        id={"content"}
        onChangeHandler={onChangeHandler}
        value={value}
        type={'text'}
        
        />
      </div>
      <div className="dimensions container">
        <h2>Dimensions:</h2>
        <Input
          classname={"width"}
          title={"width"}
          id={"width"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'range'}
          min={'0'}
        max={'500'}
        />
        <Input
          classname={"height"}
          title={"height"}
          id={"height"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'range'}
          min={'0'}
        max={'500'}
        />
      </div>

      <div className="border container ">
        <h2>Border:</h2>
        <Input
          classname={"borderradius"}
          title={"Border Radius"}
          id={"borderRadius"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'range'}
          min={'0'}
        max={'500'}
        />
        <Input
          classname={"borderwidth"}
          title={"Border Width"}
          id={"borderWidth"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'range'}
          min={'0'}
        max={'500'}
        />
       <div className="borderstylecontainer">
        <h2>Border Style</h2>
        <div className="borderstylewrapper">
       <Input
          classname={"borderstyle"}

          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'solid'}
        />
        <Input
          classname={"borderstyle"}
      
          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'dotted'}
        />
        <Input
          classname={"borderstyle"}
       
          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'dashed'}
        />
        <Input
          classname={"borderstyle"}
       
          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'double'}
        />
        <Input
          classname={"borderstyle"}
       
          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'inset'}
        />
        <Input
          classname={"borderstyle"}
       
          id={"borderStyle"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'outset'}
        />
        
        </div>
       </div>
       <Input
        classname={"bordercolor"}
        title={"Border Color"}
        id={"borderColor"}
        onChangeHandler={onChangeHandler}
        value={value}
        type={'color'}
        />
      </div>
      <div className="background container">
        <h2>Background:</h2>
        <Input
        classname={"bgcolor"}
        title={"Background Color"}
        id={"backgroundColor"}
        onChangeHandler={onChangeHandler}
        value={value}
        type={'color'}
        />
      </div>

      <div className="cursor container ">
      <div className="borderstylecontainer">
        <h2>Cursor:</h2>
        <div className="borderstylewrapper">
        <Input
          classname={"cursor"}
       
          id={"cursor"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'crosshair'}
        />
        <Input
          classname={"cursor"}
       
          id={"cursor"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'pointer'}
        />
        <Input
          classname={"cursor"}
       
          id={"cursor"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'progress'}
        />
        <Input
          classname={"cursor"}
       
          id={"cursor"}
          onChangeHandler={onChangeHandler}
          value={value}
          type={'radio'}
          choice={'auto'}
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
