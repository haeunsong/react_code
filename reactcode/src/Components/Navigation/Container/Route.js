import React from "react";
import { Route,Switch } from "react-router";

import Login from '../../Screen/Login/Container/Main';
import DashBoard from '../../Screen/Admin/Dashboard/Main';
import AccessLog from '../../Screen/Admin/Dashboard/AccessLog';
import DlAccessLog from '../../Screen/Admin/Dashboard/DlAccessLog';
import AdminList from '../../Screen/Admin/Dashboard/AdminList';


export const DashboardRoute=()=>{
  return (
    <Switch>
    <Route path="/" component={DashBoard} />
    <Route path="/accesslog" component={AccessLog} />
    <Route path="/dlaccesslog" component={DlAccessLog} />
    <Route path="/adminlist" component={AdminList} />
    </Switch>
  );

};