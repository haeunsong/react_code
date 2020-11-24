import React from 'react';
import Viewer from '../Admin/Auth/Login/Resource/Style/StMain'
import InputViewer from '../Admin/Auth/Login/Resource/Style/StInput'
import {LoginButtonViewer,SignupButtonViewer} from '../Admin/Auth/Login/Resource/Style/StButton'

// checkin/phone
// 외부 방문자 휴대전화 번호 인증 화면(외부 방문자 로그인)
const PhoneAuth = () => {
    return (
        <div>
            <span>외부 방문자 로그인</span><br/>
            <Viewer>
                <InputViewer type="text" placeholder="휴대전화 번호 ('-'제외 번호만 입력)" />
                <InputViewer className="sendPhoneNumBtn" type="submit" value="인증하기"/>
                <InputViewer type="text" placeholder="인증코드(8자리):" />
                <InputViewer type ="text"placeholder="이름:" />
                <InputViewer type="text" placeholder="소속:"/>
                <LoginButtonViewer className="form_submit_button" type="submit">확인</LoginButtonViewer>
            </Viewer>
            
        </div>
    );
};

export default PhoneAuth;