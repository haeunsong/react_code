import React,{useState} from 'react';
import AdminLogin from "./Admin/Signin/Main";
import AdminSignup from "./Admin/Signup/Main";
import VisitorLogin from "./Visitor/Signin/Main";
import UserChoice from "./Choice/Main";

const Main = () => {
  const [clickView, setClickView] = useState("");

  return (
    <>
      {clickView === "" ? (
        <UserChoice setClickView={setClickView} />
      ) : (
        false
      )}
      {clickView === "adminLoginView" ? (
        <AdminLogin setClickView={setClickView} />
      ) : (
        false
      )}
      {clickView === "adminSignupView" ? (
        <AdminSignup setClickView={setClickView} />
      ) : (
        false
      )}
      {clickView === "visitorLoginView" ? (
        <VisitorLogin setClickView={setClickView} />
      ) : (
        false
      )}
    </>
  );
};

export default Main;