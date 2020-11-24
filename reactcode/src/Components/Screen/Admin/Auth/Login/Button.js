import React,{useState} from "react";
import { LoginButtonViewer, SignupButtonViewer, FindButtonViewer, ButtonGroupViewer } from "./Resource/Style/StButton";

export const onLogin=()=>{
    


}

export const LoginButton = ({ buttonAble, onClick }) => (
    <LoginButtonViewer onClick={onClick} disabled={!buttonAble}>login</LoginButtonViewer>
);
  
export const SignupButton = ({ onClick }) => (
    <SignupButtonViewer onClick={onClick}>회원 가입</SignupButtonViewer>
)
  
export const FindButton = ({ onClick }) => (
    <FindButtonViewer onClick={onClick}>ID/PW 찾기</FindButtonViewer>
)
  
export const ButtonGroup = ({ children }) => (
    <ButtonGroupViewer>{children}</ButtonGroupViewer>
)