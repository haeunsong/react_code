import React, { useState } from 'react';
import { AdminChoiceButton, VisitorChoiceButton } from './Button';
import Viewer from './Resource/Style/StMain';

const Choice = ({ setClickView }) => {
    return (
      <Viewer>
        <AdminChoiceButton onClick={() => setClickView('adminSigninView')} />
        <VisitorChoiceButton onClick={() => setClickView('visitorSigninView')} />
      </Viewer>
    );
  };
  

export default Choice;