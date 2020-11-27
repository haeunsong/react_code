import React, { useState } from 'react';
import { Link,BrowserRouter } from 'react-router-dom';

import {SignupButton,EmailCertifyButton,onSignup,onEmailCertify} from './Button';
import {GlobalStyle} from '../../Resource/Style/StGlobal';
import {Viewer} from '../../Resource/Style/StMain';
import {useInput,Input} from '../../Resource/Input';



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
            <Viewer> 
                <h1>건물 관리자 회원가입</h1>
                <Input type="email" {...emailUseInput}/>

                <EmailCertifyButton onClick={onEmailCertifyClick} /> 

                <Input type="text" {...nameUseInput}/> 
                <Input type="text" {...majorUseInput}/>

                <Input type="text" {...userIdUseInput}/>
                <Input type="password" {...userPwUseInput}/>
                <Input type="password" {...checkUserPwUseInput}/>

                <Link to="/admin/login">
                {/*가입하기 버튼 누르면 다시 로그인하라는 창 띄우고 로그인페이지로*/}
                    <SignupButton onClick={onSignupClick}></SignupButton>
                </Link>

            </Viewer>
                    
    );
}