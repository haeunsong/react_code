import { Dashboard } from '@material-ui/icons';
import React from 'react';
import { Route, Switch, Link, useHistory, Redirect } from "react-router-dom";
import AdminDashboard from "../Dashboard/Main";

/*
{getUserToken() ? <Dashboard /> : <Login />}
*/
// 로그인되어있으면 대시보드화면으로 (home)
// 없으면 auth(login) 화면으로

const ContainerRouter = ({ isLoggedIn }) => {
  return (
      <>
        {isLoggedIn ? (
          // 대시보드화면으로
          <Redirect to="/admin/dashboard" />
        ) : (
          // 로그인화면으로
          <>
            <Redirect to="/admin/login" />

          </>

        )
        }
      </>

  );
};

export default ContainerRouter;