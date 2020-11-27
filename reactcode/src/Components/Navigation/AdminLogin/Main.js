import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AdminLogin } from '../../Screen/AdminLogin/Main';
import {AdminSignUp } from '../../Screen/AdminSignup/Main';

const Main=()=>{
    return(
            <BrowserRouter>
                <Route exact path="/admin/login" component={AdminLogin} />;
                <Route exact path="/admin/signup" component={AdminSignUp} />;
            </BrowserRouter>
    )
}

export default Main;