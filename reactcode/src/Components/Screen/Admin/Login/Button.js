import React from "react";

import {
  LoginButtonViewer,
  MoveToSignupButtonViewer,
  BackButtonViewer
} from "./Resource/Style/StButton";

export const MoveToSignupButton = ({onClick}) => (
  <MoveToSignupButtonViewer onClick={onClick}>회원가입</MoveToSignupButtonViewer>
);
export const LoginButton = ({ onClick }) => (
  <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);

export const onAdminLogin = (email, password) => {
  console.log(email, password);
  // ajax 서버로 보내는 통신
};
export const BackButton = ({onClick}) => <BackButtonViewer onClick={onClick}>뒤로가기</BackButtonViewer>;
