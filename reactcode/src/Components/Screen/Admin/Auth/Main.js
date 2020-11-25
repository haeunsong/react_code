import React,{useState} from 'react';
import {useInput,Input} from './Input';
import {onAdminLogin,LoginButton, SignupButton, onSignup,EmailCertifyButton,onEmailCertify} from './Button';
import Viewer from './Resource/Style/StMain'
import GlobalStyle from './Resource/Style/StGlobal';
// admin/login
// 한 번 로그인하면 계속 유지
export const AdminLogin=()=>{
    const emailUseInput = useInput("학내메일로 로그인(@office.skhu.ac.kr):");
    const passwordUseInput = useInput("비밀번호를 입력하세요:");
    
    const onLoginClick=()=>{
        onAdminLogin(emailUseInput.value, passwordUseInput.value);
    }
    // useInput이 반환하는 것: placeholder,value,onChange
    return (
        <>
            <GlobalStyle />
                <Viewer>
                    <h1>건물 관리자 로그인</h1>
                    <Input type="email" {...emailUseInput} />
                    <Input type="password" {...passwordUseInput} />  
                    <LoginButton onClick={onLoginClick} />
                </Viewer>
        </>
    );
}

// admin/signup
export const AdminSignUp=()=>{
    const emailUseInput = useInput("학내메일로 가입(***@office.skhu.ac.kr):");
    const nameUseInput = useInput("이름:");
    const majorUseInput = useInput("학과(학부):");
    const userIdUseInput = useInput("사용할 ID 입력:");
    const userPwUseInput = useInput("사용할 PW 입력:");
    const checkUserPwUseInput = useInput("PW 확인:");

    const onEmailCertifyClick=()=>{
        // 이메일로 인증링크 보냄. 서버랑 연결..?
        onEmailCertify();
    }
    const onSignupClick=()=>{
        onSignup(userIdUseInput.value,userPwUseInput.value);
    }
    // useInput이 반환하는 것: placeholder,value,onChange
    // 학내메일로 인증 후 별도의 ID,비번으로 가입.
    // 기기에 ID,비번 저장해서 두번째부터는 바로 로그인.
    return (
        <>
        <GlobalStyle />
            <Viewer> 
                <h1>건물 관리자 회원가입</h1>
                <Input type="email" {...emailUseInput}/>

                <EmailCertifyButton onClick={onEmailCertifyClick} /> 

                <Input type="text" {...nameUseInput}/> 
                <Input type="text" {...majorUseInput}/>

                <Input type="text" {...userIdUseInput}/>
                <Input type="password" {...userPwUseInput}/>
                <Input type="password" {...checkUserPwUseInput}/>

                <SignupButton onClick={onSignupClick}></SignupButton>
            </Viewer>
        </>
        
                    
    );
}
