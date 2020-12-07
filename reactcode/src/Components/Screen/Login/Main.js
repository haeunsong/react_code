// import React,{useState} from 'react';

// import GlobalStyle from '../Share/StConstant';
// import AdminSignin from "./Admin/Signin/Main";
// import AdminSignup from "./Admin/Signup/Main";
// import VisitorSignin from "./Visitor/Signin/Main";
// import {Choice} from "./Container/Main";


// export const Login = () => {
//   const [clickView, setClickView] = useState('');

//   return (
//     <>
//       <GlobalStyle />
//       {clickView === '' ? <Choice setClickView={setClickView} /> : false}
//       {clickView === 'adminSigninView' ? <AdminSignin setClickView={setClickView} /> : false}
//       {clickView === 'adminSignupView' ? <AdminSignup setClickView={setClickView} /> : false}
//       {clickView === 'visitorSigninView' ? <VisitorSignin setClickView={setClickView} /> : false}
//     </>
//   );
// }

// export default Login;