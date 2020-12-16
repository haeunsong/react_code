import React from 'react';
import {ChooseAdminButton,ChooseVisitorButton} from './Button';
import Viewer from './Resource/Style/StMain';

const Home=({setClickView}) => {
  return (
    <Viewer>
      <ChooseAdminButton onClick={() => setClickView('adminSigninView')} />
      <ChooseVisitorButton onClick={() => setClickView('visitorSignupView')} />
    </Viewer>
  );
};

export default Home;