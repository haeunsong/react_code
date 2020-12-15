import React,{useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { LoginRoute, DashboardRoute } from "./Route";
import {getUserToken} from '../../../Auth/Token';
import Kiosk from '../../Screen/Dashboard/Kiosk/Main';

const Main=()=>{
  return (
    <BrowserRouter>
      {getUserToken() ? <Kiosk /> : <LoginRoute />}     
    </BrowserRouter>
  )
}
export default Main;
