import React,{useState} from "react";
import { LoginButtonViewer, SignupButtonViewer, EmailCertifyButtonViewer,PhoneCertifyButtonViewer } from "./Resource/Style/StButton";

export const onAdminLogin=(email,password)=>{
    console.log(email,password);
// ajax 서버로 보내는 통신
}
export const onVistiorLogin=(phone,name,major)=>{
    console.log(phone,name,major);
}
export const onSignup=(id,password)=>{
    console.log(id,password);
}
export const onEmailCertify=()=>{
    console.log("이메일로 인증링크를 전송하였습니다. 이메일을 확인해주세요.")

}
export const onPhoneCertify=()=>{
    console.log("핸드폰으로 인증번호를 전송하였습니다. 인증번호를 확인해주세요.")
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
    <EmailCertifyButtonViewer onClick={onClick}>인증메일 전송</EmailCertifyButtonViewer>
)
  
export const PhoneCertifyButton = ({ onClick }) => (
    <PhoneCertifyButtonViewer onClick={onClick}>인증번호 전송</PhoneCertifyButtonViewer>
)
