import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VisitorLogin from '../../Screen/VisitorLogin/Main';

const Main=()=>{
    return(
            <BrowserRouter>
                <Route exact path="/visitor/login" component={VisitorLogin} />;
            </BrowserRouter>
    )
}

export default Main;