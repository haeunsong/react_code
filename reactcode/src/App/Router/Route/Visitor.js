import React from 'react';
import PhoneAuth from '../../../Components/Screen/Visitor/PhoneAuth';
import VisitorForm from '../../../Components/Screen/Visitor/VisitorForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const visitor = () => {
    return (
        <Switch>
          <Route exact path="/checkin/visitor" component={VisitorForm} />
          <Route exact path="/checkin/phone" component={PhoneAuth} />
        </Switch>
            
    );
};

export default visitor;