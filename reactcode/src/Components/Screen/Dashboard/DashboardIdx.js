import React from 'react';
import { Link } from "react-router-dom";

import Viewer from '../Login/Choice/Resource/Style/StMain';
import {AccessLogButton,DlAccessLogButton,AdminListButton,KioskButton} from './Button';
export const DashBoardIdx = ({setDashboardClickView}) => {
  return (
    <Viewer>
      <h1>dashboard</h1>
      <Link to="/dashboard/accesslog">
        <AccessLogButton onClick={()=>setDashboardClickView("accesslog")}/>
      </Link>
      <Link to="/dashboard/dlaccesslog">
        <DlAccessLogButton onClick={()=>setDashboardClickView("dlaccesslog")}/>
      </Link>
      <Link to="/dashboard/adminlist">
          <AdminListButton onClick={()=>setDashboardClickView("adminlist")}/>
      </Link>
      <Link to="/dashboard/kiosk">
        <KioskButton onClick={()=>setDashboardClickView("kiosk")}/>
      </Link>
    </Viewer>
  );
};
export const AccessLog=()=>{
  return(
          <Viewer>
              <h1>출입기록</h1>
              
          </Viewer>
  )

}
export const DlAccessLog=()=>{
  return(
          <Viewer>
              <h1>출입기록 다운로드</h1>
              
          </Viewer>
  )

}

export const AdminList=()=>{
  return (
      <Viewer>
          <h1>관리자 목록</h1>
          
      </Viewer>

  )
}
export const Kiosk=()=>{
  return(
          <Viewer>
              <h1>키오스크</h1>
              
          </Viewer>
  )

}