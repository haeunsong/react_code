import React, { useState } from 'react';

import GlobalStyle from '../../Share/StConstant';
import AdminSignin from "../Admin/Signin/Main";
import AdminSignup from "../Admin/Signup/Main";
import VisitorSignin from "../Visitor/Signin/Main";
import Viewer from "./Resource/Style/StMain";
import { ChooseAdminButton, ChooseVisitorButton } from "./Button";

export const Choice = () => {
  const [clickView, setClickView] = useState('');

  const onAdminButtonClick = () => {
    setClickView('adminSigninView');
    
    return clickView === 'adminSigninView' ? <AdminSignin setClickView={setClickView} /> : false


  }

  return (
    <Viewer>
      <GlobalStyle />
      {/* {clickView === '' ? <Choice setClickView={setClickView} /> : false}
      {clickView === 'adminSigninView' ? <AdminSignin setClickView={setClickView} /> : false}
      {clickView === 'adminSignupView' ? <AdminSignup setClickView={setClickView} /> : false}
      {clickView === 'visitorSigninView' ? <VisitorSignin setClickView={setClickView} /> : false}
      <ChooseAdminButton onClick={() => setClickView('adminSigninView')} /> */}
      <ChooseAdminButton onClick={onAdminButtonClick} />
      <ChooseVisitorButton onClick={() => setClickView('visitorSigninView')} />
    </Viewer>
  );
};

