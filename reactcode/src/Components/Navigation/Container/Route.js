import React from "react";
import { Route,Switch } from "react-router";

import {Choice} from '../../Screen/Login/Container/Main';
import DashBoard from '../../Screen/Dashboard/Main';
import AccessLog from '../../Screen/Dashboard/AccessLog';
import DlAccessLog from '../../Screen/Dashboard/DlAccessLog';
import AdminList from '../../Screen/Dashboard/AdminList';
import Kiosk from '../../Screen/Dashboard/Kiosk';

export const LoginRoute = () => {
  return <Choice />;
};
export const DashboardRoute=()=>{
  return (
    <Switch>
    {/* <Route path="/dashboard" component={DashBoardIdx} /> */}
    <Route path="/" component={DashBoard} />
    <Route path="/accesslog" component={AccessLog} />
    <Route path="/dlaccesslog" component={DlAccessLog} />
    <Route path="/adminlist" component={AdminList} />
    <Route path="/kiosk" component={Kiosk} />
    </Switch>
  );

};