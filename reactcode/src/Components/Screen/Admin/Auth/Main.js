import React,{useState} from 'react';
import {useInput,Input} from './Login/Input';
import {onLogin,LoginButton, SignupButton, onSignup} from './Login/Button';
import Viewer from './Login/Resource/Style/StMain'
// admin/login
export const AdminLogin=()=>{
    const emailUseInput = useInput("메일주소를 입력하세요(@office.skhu.ac.kr):");
    const passwordUseInput = useInput("비밀번호를 입력하세요:");
    
    const onLoginClick=()=>{
        onLogin(emailUseInput.value, passwordUseInput.value);
    }
    return (
        <Viewer>
            <span>건물 관리자 로그인</span>
                <Input type="email" {...emailUseInput} />
                    {/* // placeholder={emailUseInput.placeholder}
                    // onChange = {emailUseInput.onChange}
                    // value = {emailUseInput.value} 
                // /> */}
                <Input type="password" {...passwordUseInput} />
                    {/* placeholder={passwordUseInput.placeholder}
                    onChange={passwordUseInput.onChange}
                    value={passwordUseInput.value} */}
                
                <LoginButton onClick={onLoginClick} />
        </Viewer>
    );
}

// admin/signup
export const AdminSignUp=()=>{
    const emailUseInput = useInput("학내메일(***@office.skhu.ac.kr):");
    const passwordUseInput = useInput("비밀번호를 입력하세요:");

    const onSignupClick=()=>{
        onSignup(emailUseInput.value,passwordUseInput.value);
    }
    return (
        <Viewer> 
            <span>건물 관리자 가입</span>
                <Input type="email" {...emailUseInput}/>
                {/* <Input type="submit" value="인증하기"/> 
                <Input type="text" placeholder="학내메일 인증코드(8자리):"/> */}
                <Input type="text" placeholder="이름:"/>
                <Input type="text" placeholder="소속:"/>
                <Input type="text" placeholder="ID:"/>
                <Input type="password" placeholder="PW:"/>
                <Input type="password" placeholder="PW 확인:"/>
                <SignupButton type="submit" >확인</SignupButton> */}
        </Viewer>
        
                    
    );
}
