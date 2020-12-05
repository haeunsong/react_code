import React,{useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { LoginRoute, DashboardRoute } from "./Route";
import {getUserToken} from '../../../Auth/Token';
const Main=()=>{
  return (
    <BrowserRouter>
      {getUserToken() ? <DashboardRoute /> : <LoginRoute />}
    </BrowserRouter>

  )

}
export default Main;
