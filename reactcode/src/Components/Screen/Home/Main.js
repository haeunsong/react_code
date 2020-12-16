// 버튼 두개만 표시되는 화면만 만들기
// useState 로 view === admin ===> admin,

import React, { useState } from 'react';
import GlobalStyle from '../Share/StConstant';
import Home from './Home';
import AdminSignin from '../Admin/Login/Main';
import AdminSignup from '../Admin/Signup/Main';
import VisitorSignup from '../Visitor/Mobile/Signup/Main';

const Main = () => {
  const [clickView, setClickView] = useState('homeView');

  return (
    <>
    <GlobalStyle />
      {clickView === 'homeView' && <Home setClickView={setClickView} /> }
      {clickView === 'adminSigninView' && <AdminSignin setClickView={setClickView} /> }
      {clickView === 'adminSignupView' && <AdminSignup setClickView={setClickView} />}
      {clickView === 'visitorSignupView' && <VisitorSignup setClickView={setClickView} /> }
    </> // fragment
  );
};

export default Main;
