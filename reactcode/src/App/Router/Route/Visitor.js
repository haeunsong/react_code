import React from 'react';
import {VisitorLogin} from '../../../Components/Screen/Visitor/Main';
import {IssueToken} from '../../../Components/Screen/Visitor/IssueToken';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const visitor = () => {
    return (
        <Switch>
          <Route exact path="/visitor/login" component={VisitorLogin} />
          <Route exact path="/visitor/token" component={IssueToken} />
        </Switch>
            
    );
};

export default visitor;