import React from 'react'

import {LoginButtonViewer,moveToSignupButtonViewer} from '../AdminLogin/Resource/Style/StButton';

export const LoginButton = ({ onClick }) => (
    <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);

export const moveToSignupButton = ({onClick}) => (
    <moveToSignupButtonViewer onClick={onClick}>회원가입</moveToSignupButtonViewer>
);

export const onAdminLogin=(email,password)=>{
    console.log(email,password);
// ajax 서버로 보내는 통신
};
