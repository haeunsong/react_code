import React from 'react';
import InputViewer from './Login/Resource/Style/StInput'
import {LoginButtonViewer,SignupButtonViewer} from './Login/Resource/Style/StButton';
import Viewer from './Login/Resource/Style/StMain'
// admin/login
export const AdminLogin=()=>{
    return (
        <Viewer>
            <span>건물 관리자 로그인</span><br/>
                <InputViewer type="email" placeholder="메일주소를 입력하세요(@office.skhu.ac.kr):"/>
                <InputViewer type="password" placeholder="비밀번호를 입력하세요:"/>
                <LoginButtonViewer type="submit">확인</LoginButtonViewer>
        </Viewer>
    );
}

// admin/signup
export const AdminSignUp=()=>{
    return (
        <Viewer>
            <span>건물 관리자 가입</span><br/>
                <InputViewer name="adminEmail" type="email" placeholder="학내메일(***@office.skhu.ac.kr):"/>
                <InputViewer className="sendEmailBtn" type="submit" value="인증하기"/>
                <InputViewer type="text" placeholder="학내메일 인증코드(8자리):"/>
                <InputViewer type="text" placeholder="이름:"/>
                <InputViewer type="text" placeholder="소속:"/>
                <InputViewer type="text" placeholder="ID:"/>
                <InputViewer type="password" placeholder="PW:"/>
                <InputViewer type="password" placeholder="PW 확인:"/>
                <SignupButtonViewer type="submit" >확인</SignupButtonViewer>
        </Viewer>
                    
    );
}

export default AdminSignUp;