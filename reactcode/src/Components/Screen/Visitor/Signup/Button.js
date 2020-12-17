import React from "react";
import { setUserToken } from "../Auth/Main";
import {
  CertifyPhoneButtonViewer,
  LoginButtonViewer,
  BackButtonViewer,
  VisitorSignupButtonViewer
} from "./Resource/Style/StButton";

export const onVistiorLogin = (phone, name, major) => {
  console.log(phone, name, major);
  // 서버쪽에 토큰 물어오기
  // fetch로 서버 URL 넣어서 가져오면됨
  // 가져온 토큰을

  setUserToken("Test");
  window.location.reload();
};
export const onCertifyPhone = () => {
  console.log("핸드폰으로 인증번호를 전송하였습니다. 인증번호를 확인해주세요.");
};
export const CertifyPhoneButton = ({ onClick }) => (
  <CertifyPhoneButtonViewer onClick={onClick}>
    인증번호 전송
  </CertifyPhoneButtonViewer>
);
export const LoginButton = ({ onClick }) => (
  <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);
export const BackButton = ({ onClick }) => (
  <BackButtonViewer onClick={onClick}>뒤로가기</BackButtonViewer>
);
export const VisitorSignupButton = ({ onClick }) => (
  <VisitorSignupButtonViewer onClick={onClick}></VisitorSignupButtonViewer>
);

