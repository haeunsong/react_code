import React from 'react'

import {LoginButtonViewer,MoveToSignupButtonViewer} from '../AdminLogin/Resource/Style/StButton';

export const MoveToSignupButton = () => (
    <MoveToSignupButtonViewer>회원가입</MoveToSignupButtonViewer>
);
export const LoginButton = ({ onClick }) => (
    <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);

export const onAdminLogin=(email,password)=>{
    console.log(email,password);
// ajax 서버로 보내는 통신
};
