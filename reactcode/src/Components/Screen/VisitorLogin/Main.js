import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';

import {useInput,Input} from '../../Resource/Input';
import { onPhoneCertify,onVistiorLogin,LoginButton,PhoneCertifyButton } from './Button';
import {GlobalStyle} from '../../Resource/Style/StGlobal';
import {Viewer} from '../../Resource/Style/StMain';

// visitor/login
// 방문자 휴대전화 번호 인증 화면(방문자 로그인)
// 학생/교직원/교수 등등
// 전화번호로 인증하면 자동으로 사용자 생성 및 인증토큰 발급
// 서버에 인증된 전화번호 저장
// 이름, 소속은 입력하면 기기에만 저장.(다음부터는 가입안해도되게)
// 체크인 시 토큰, 이름, 소속 제출
export const VisitorLogin=()=>{
    const phoneUseInput = useInput("휴대전화 번호('-'제외 번호만 입력):");
    const certifyNumUseInput = useInput("인증번호(8자리):");
    const nameUseInput = useInput("이름:");
    const majorUseInput = useInput("학과(학부):");

    const onPhoneCertifyClick=()=>{
        // 휴대폰으로 인증번호 전송
        onPhoneCertify();
    }
    const onLoginClick=()=>{
        onVistiorLogin(phoneUseInput.value, nameUseInput.value,majorUseInput.value);
    }
    return (
        <>
            <GlobalStyle />
            <Viewer>
                <h1>방문자 로그인</h1>
                <Input type="text" {...phoneUseInput} />
                <PhoneCertifyButton onClick={onPhoneCertifyClick} />
                <Input type="text" {...certifyNumUseInput} />
                <Input type ="text" {...nameUseInput} />
                <Input type="text" {...majorUseInput} />

                <Link to="/dashboard/kiosk">
                    <LoginButton onClick={onLoginClick} />
                </Link>

            </Viewer>
        </>
    );
}

export default VisitorLogin; 