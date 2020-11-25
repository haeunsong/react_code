import React,{useState} from "react";
import { LoginButtonViewer, SignupButtonViewer, FindButtonViewer, ButtonGroupViewer } from "./Resource/Style/StButton";

export const onLogin=(email,password)=>{
    console.log(email,password);
// ajax 서버로 보내는 통신
}
export const onSignup=(email,password)=>{
    console.log(email,password);
}

export const LoginButton = ({ onClick }) => (
    <LoginButtonViewer onClick={onClick}>로그인</LoginButtonViewer>
);
  
export const SignupButton = ({ onClick }) => (
    <SignupButtonViewer onClick={onClick}>회원 가입</SignupButtonViewer>
);
  
// export const FindButton = ({ onClick }) => (
//     <FindButtonViewer onClick={onClick}>ID/PW 찾기</FindButtonViewer>
// )
  
// export const ButtonGroup = ({ children }) => (
//     <ButtonGroupViewer>{children}</ButtonGroupViewer>
// )