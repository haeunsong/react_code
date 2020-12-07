import React from "react";
import { Link } from "react-router-dom";

import {
  SignupButton,
  CertifyEmailButton,
  onSignup,
  onCertifyEmail,
  BackButton
} from "./Button";
import { useInput, Input } from "./Input";
import { Viewer,Title } from "./Resource/Style/StMain";

// admin/signup
const Main = ({ setClickView }) => {
  const emailUseInput = useInput("학내메일로 가입(***@office.skhu.ac.kr):");
  const nameUseInput = useInput("이름:");
  const majorUseInput = useInput("학과(학부):");
  const userIdUseInput = useInput("사용할 ID 입력:");
  const userPwUseInput = useInput("사용할 PW 입력:");
  const checkUserPwUseInput = useInput("PW 확인:");

  const onCertifyEmailClick = () => {
    // 이메일로 인증링크 보냄. 
    onCertifyEmail();
  };
  const onBackClick = () => {
    setClickView("adminLoginView")
  }
  // const onSignupClick = () => {
  //   onSignup(userIdUseInput.value, userPwUseInput.value);
  //   setClickView("adminLoginView")
  // };
  // useInput이 반환하는 것: placeholder,value,onChange
  // 학내메일로 인증 후 별도의 ID,비번으로 가입.
  // 기기에 ID,비번 저장해서 두번째부터는 바로 로그인.
  return (
    <Viewer>
      <h1>건물 관리자 회원가입</h1>
      <Input type="email" {...emailUseInput} />

      <CertifyEmailButton onClick={onCertifyEmailClick} />

      <Input type="text" {...nameUseInput} />
      <Input type="text" {...majorUseInput} />

      <Input type="text" {...userIdUseInput} />
      <Input type="password" {...userPwUseInput} />
      <Input type="password" {...checkUserPwUseInput} />

      <SignupButton onClick={()=>setClickView("adminLoginView")}></SignupButton>
      <BackButton onClick={onBackClick} />
    </Viewer>
  );
};

export default Main;
