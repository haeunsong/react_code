import React,{useState} from 'react';
import AdminLogin from "./Admin/Signin/Main";
import AdminSignup from "./Admin/Signup/Main";
import VisitorLogin from "./Visitor/Signin/Main";
import ChooseUser from "./Choose/Main";

const Main = () => {
  const [clickView, setClickView] = useState("");

  return (
    <>
      {clickView === "" ? (
        <ChooseUser setClickView={setClickView} />
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