import React,{useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { LoginRoute, DashboardRoute } from "./Route";

const Main=()=>{
  return (
    <BrowserRouter>
      <LoginRoute />
      {/* <DashboardRoute /> */}
    
    

    </BrowserRouter>

  )

}
export default Main;
