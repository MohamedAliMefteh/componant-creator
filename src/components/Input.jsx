import React from "react";

const Input = ({classname,type, id, onChangeHandler, value,title,choice,min,max,step}) => {
 return(
  <div className={`${classname||''} params`}>
    <label htmlFor={id}>{title || choice}</label>
    <input
    type={type}
    id={id}
    name={classname}
    min={type==='range'?min:null}
    max={type==='range'?max:null}
    step={step? step:1}
    value={type==='radio'  ?choice:value[id]}
    onChange={(e)=>onChangeHandler(e)}
    />
    {type==='range' &&<input type="number" id={id} step={step? step:1} className="valueresult" value={value[id] } onChange={(e)=>onChangeHandler(e)}/>}
  </div>
 )

};

export default Input;
