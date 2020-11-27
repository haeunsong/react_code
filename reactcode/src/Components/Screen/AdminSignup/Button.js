import React from "react";
import {SignupButtonViewer,EmailCertifyButtonViewer} from './Resource/Style/StButton';

export const onSignup=(id,password)=>{
    console.log(id,password);
}
export const onEmailCertify=()=>{
    console.log("이메일로 인증링크를 전송하였습니다. 이메일을 확인해주세요.")
}
export const SignupButton = ({ onClick }) => (
    <SignupButtonViewer onClick={onClick}>가입하기</SignupButtonViewer>
);

// 누르면 이메일로 인증코드. 누르면 전화번호로 인증번호
// 이메일로 인증링크 담아서 보냄.
export const EmailCertifyButton = ({ onClick }) => (
    <EmailCertifyButtonViewer onClick={onClick}>인증메일 전송</EmailCertifyButtonViewer>
)