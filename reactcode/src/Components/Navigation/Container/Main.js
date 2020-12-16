import React,{useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from '../../Screen/Home/Main';

const Main=()=>{
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}
export default Main;
