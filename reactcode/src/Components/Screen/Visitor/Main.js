import React from 'react';
import Viewer from '../Admin/Auth/Resource/Style/StMain'
import {useInput,Input} from '../Admin/Auth/Input';
import { onPhoneCertify,onVistiorLogin,LoginButton,PhoneCertifyButton } from '../Admin/Auth/Button';
import GlobalStyle from '../Admin/Auth/Resource/Style/StGlobal';

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
                <h1>방문자 로그인(skhus앱이 없는 학생/교직원/교수 등)</h1>
                <Input type="text" {...phoneUseInput} />
                <PhoneCertifyButton onClick={onPhoneCertifyClick} />
                <Input type="text" {...certifyNumUseInput} />
                <Input type ="text" {...nameUseInput} />
                <Input type="text" {...majorUseInput} />
                <LoginButton onClick={onLoginClick} />
            </Viewer>
        </>
    );
}

export default VisitorLogin;

