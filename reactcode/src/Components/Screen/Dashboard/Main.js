import React, { useState } from 'react';
import {DashBoardIdx,AccessLog,DlAccessLog,AdminList,Kiosk} from './DashboardIdx';
// accesslog 
// dlaccesslog
// adminlist
// kiosk => 이부분은 따로 개발중

export const Dashboard = () => {
  const [dashboardClickView,setDashboardClickView] = useState("")
  
  return (
    <>
      {dashboardClickView === "" ? (
        <DashBoardIdx setDashboardClickView={setDashboardClickView}/>
      ):(
        false
      )}
      {dashboardClickView === "accesslog" ? (
        <AccessLog setDashboardClickView={setDashboardClickView}/>
      ):(
        false
      )}
      {dashboardClickView === "dlaccesslog" ? (
        <DlAccessLog setDashboardClickView={setDashboardClickView}/>
      ):(
        false
      )}
      {dashboardClickView === "adminlist" ? (
        <AdminList setDashboardClickView={setDashboardClickView}/>
      ):(
        false
      )}
      {dashboardClickView === "kiosk" ? (
        <Kiosk setDashboardClickView={setDashboardClickView}/>
      ):(
        false
      )}
      
    </>
  );
};
