import { Dashboard } from '@material-ui/icons';
import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboard from "../Dashboard/Main";
import AdminLogin from "../../Admin/Main";

/*
{getUserToken() ? <Dashboard /> : <Login />}
*/
// 로그인되어있으면 대시보드화면으로 (home)
// 없으면 auth(login) 화면으로 
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          // 대시보드화면으로
          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>
        ) : (
          <Route>
            <AdminLogin  />
          </Route>

        )

        }
      </Switch>
    </Router>

  );
};

export default AppRouter;