import React from 'react';
import Viewer from '../Admin/Auth/Resource/Style/StMain'
import InputViewer from '../Admin/Auth/Resource/Style/StInput'
import {LoginButtonViewer,SignupButtonViewer} from '../Admin/Auth/Resource/Style/StButton'

// checkin/phone
// 방문자 휴대전화 번호 인증 화면(방문자 로그인)
// 학생/교직원/교수 등등
// 전화번호로 인증하면 자동으로 사용자 생성 및 인증토큰 발급
// 서버에 인증된 전화번호 저장
// 이름, 소속은 입력하면 기기에만 저장.(다음부터는 가입안해도되게)
// 체크인 시 토큰, 이름, 소속 제출
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