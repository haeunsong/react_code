import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AdminLogin,AdminSignUp} from '../../../Components/Screen/Admin/Auth/Main';

const Admin = () => {
    return (
        <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/signup" component={AdminSignUp} />
        </Switch>
            
    );
};

export default Admin;