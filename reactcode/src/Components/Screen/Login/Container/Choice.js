import React from 'react';
import {ChooseAdminButton,ChooseVisitorButton} from './Button';
import Viewer from './Resource/Style/StMain';

const Choice=({setClickView}) => {
  return (
    <Viewer>
      <ChooseAdminButton onClick={() => setClickView('adminSigninView')} />
      <ChooseVisitorButton onClick={() => setClickView('visitorSigninView')} />
    </Viewer>
  );
};

export default Choice;