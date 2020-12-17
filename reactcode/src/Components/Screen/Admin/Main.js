import React,{useState} from 'react';
import GlobalStyle from '../Share/StConstant';
import AdminSignin from '../Admin/Login/Main';
import AdminSignup from '../Admin/Signup/Main';

const Main = () => {
  const [clickView,setClickView] = useState('adminSigninView');

  return (
    <>
    <GlobalStyle />
    {clickView === 'adminSigninView' && <AdminSignin setClickView={setClickView} />}
    {clickView === 'adminSignupView' && <AdminSignup setClickView={setClickView} />}
    </>
  )
}

export default Main;