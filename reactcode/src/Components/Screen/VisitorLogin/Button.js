import React from "react";
import {PhoneCertifyButtonViewer} from './Resource/Style/StButton'

export const onVistiorLogin=(phone,name,major)=>{
    console.log(phone,name,major);
}
export const onPhoneCertify=()=>{
    console.log("핸드폰으로 인증번호를 전송하였습니다. 인증번호를 확인해주세요.")
}
export const PhoneCertifyButton = ({ onClick }) => (
    <PhoneCertifyButtonViewer onClick={onClick}>인증번호 전송</PhoneCertifyButtonViewer>
)
export const LoginButton = ({ onClick }) => (
    <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);
