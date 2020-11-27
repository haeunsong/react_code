import React from 'react';

import GlobalStyle from '../Components/Resource/Style/StGlobal';
import AdminLoginNavigation from '../Components/Navigation/AdminLogin/Main'
import DashboardNavigation from '../Components/Navigation/Dashboard/Main'
import VisitorLoginNavigation from '../Components/Navigation/VisitorLogin/Main'
import ChooseNavigation from '../Components/Navigation/Choose/Main'

const Main = () => {
  return (
    <>
    <GlobalStyle />
    <ChooseNavigation />
    <AdminLoginNavigation />
    <DashboardNavigation />
    <VisitorLoginNavigation />


    </>
  );
}

export default Main;
