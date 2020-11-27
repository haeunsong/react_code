import React from 'react';

import GlobalStyle from '../Components/Resource/Style/StGlobal';
import AdminLoginNavigation from '../Components/Navigation/AdminLogin/Main'
import DashboardNavigation from '../Components/Navigation/Dashboard/Main'
import VisitorLoginNavigation from '../Components/Navigation/VisitorLogin/Main'

const Main = () => {
  return (
    <>
    <GlobalStyle />
    <AdminLoginNavigation />
    <DashboardNavigation />
    <VisitorLoginNavigation />


    </>
  );
}

export default Main;
