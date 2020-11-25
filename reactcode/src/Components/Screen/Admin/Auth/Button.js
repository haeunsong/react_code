import React,{useState} from "react";
import { LoginButtonViewer, SignupButtonViewer, EmailCertifyButtonViewer } from "./Resource/Style/StButton";

export const onLogin=(email,password)=>{
    console.log(email,password);
// ajax 서버로 보내는 통신
}
export const onSignup=(id,password)=>{
    console.log(id,password);
}
export const onEmailCertify=()=>{
    console.log("이메일로 인증링크를 전송하였습니다. 이메일을 확인해주세요.")

}

export const LoginButton = ({ onClick }) => (
    <LoginButtonViewer onClick={onClick}>로그인</LoginButtonViewer>
);
  
export const SignupButton = ({ onClick }) => (
    <SignupButtonViewer onClick={onClick}>회원가입</SignupButtonViewer>
);

// 누르면 이메일로 인증코드. 누르면 전화번호로 인증번호
// 이메일로 인증링크 담아서 보냄.
export const EmailCertifyButton = ({ onClick }) => (
    <EmailCertifyButtonViewer onClick={onClick}>인증하기</EmailCertifyButtonViewer>
)
  
// export const FindButton = ({ onClick }) => (
//     <FindButtonViewer onClick={onClick}>ID/PW 찾기</FindButtonViewer>
// )
  
// export const ButtonGroup = ({ children }) => (
//     <ButtonGroupViewer>{children}</ButtonGroupViewer>
// )