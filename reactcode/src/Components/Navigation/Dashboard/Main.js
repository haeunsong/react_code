// 이어주는 역할. 
// BrowserRouter 부분. 그림 안그림.

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import {AreaList,Dashboard,AccessLog,DownloadAccessLog,Kiosk,AdminList} from '../../Screen/Dashboard/Main'

const Main = () => {
    return (
            <BrowserRouter>
                <Route exact path="/area/list" component={AreaList} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/accesslog" component={AccessLog} />
                <Route exact path="/dashboard/dlaccesslog" component={DownloadAccessLog} />
                <Route exact path="/dashboard/kiosk" component={Kiosk} />
                <Route exact path="/dashboard/adminlist" component={AdminList} />
            </BrowserRouter>
            
    );
};

export default Main;