import React,{useState} from "react";
import {InputViewer} from "./Resource/Style/StInput"

export const useInput=(prefill)=>{
    const [value,setValue] = useState("");
    const placeholder = prefill;

    const onChange=(e)=>setValue(e.target.value);
    
    return {placeholder,value,onChange};
}

export const Input=({ inputAble = true, onChange, placeholder, type, value })=>{
    <InputViewer
        disabled={!inputAble}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
    />

};
