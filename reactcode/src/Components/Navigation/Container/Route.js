import React from "react";

import Login from "../../Screen/Login/Main";
import { Route } from "react-router";
import {DashBoardIdx,AccessLog,DlAccessLog, AdminList,Kiosk } from "../../Screen/Dashboard/DashboardIdx";
import { Dashboard } from "../../Screen/Dashboard/Main"
export const LoginRoute = () => {
  return <Login />;
};
export const DashboardRoute=()=>{
  return <Dashboard />;
    // <>
    // <Route path="/dashboard" component={DashBoardIdx} />
    // <Route path="/dashboard/accesslog" component={AccessLog} />
    // <Route path="/dashboard/dlaccesslog" component={DlAccessLog} />
    // <Route path="/dashboard/adminlist" component={AdminList} />
    // <Route path="/dashboard/kiosk" component={Kiosk} />
    // </>
  

}
export default DashboardRoute;