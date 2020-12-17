import React from 'react';


import { MoveToSignupButton, LoginButton } from "./Button";
import { onAdminLogin } from "./Button";
import { useInput, Input } from "./Input";
import { Viewer,Title } from "./Resource/Style/StMain";
import { BackButton } from "./Button";

const Main = ({setClickView}) => {
  const emailUseInput = useInput("학내메일로 로그인(@office.skhu.ac.kr):");
  const passwordUseInput = useInput("비밀번호를 입력하세요:");

  const onLoginClick = () => {
    onAdminLogin(emailUseInput.value, passwordUseInput.value);
  };


  // useInput이 반환하는 것: placeholder,value,onChange
  return (
    <Viewer>
      <Title>건물 관리자 로그인</Title>
      <Input type="email" {...emailUseInput} />
      <Input type="password" {...passwordUseInput} />
      <LoginButton onClick={onLoginClick} />
      <MoveToSignupButton onClick={() => setClickView("adminSignupView")}></MoveToSignupButton>
      {/* <BackButton onClick={()=>setClickView('homeView')} /> */}

    </Viewer>
  );
};

export default Main;