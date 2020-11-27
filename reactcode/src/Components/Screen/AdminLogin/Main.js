import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';

import {MoveToSignupButton,LoginButton} from './Button'
import {useInput,Input} from '../../Resource/Input';
import {onAdminLogin} from './Button';
import {Viewer} from '../../Resource/Style/StMain';


export const AdminLogin=()=>{
    const emailUseInput = useInput("학내메일로 로그인(@office.skhu.ac.kr):");
    const passwordUseInput = useInput("비밀번호를 입력하세요:" );
    
    const onLoginClick=()=>{
        onAdminLogin(emailUseInput.value, passwordUseInput.value);
    }

    // useInput이 반환하는 것: placeholder,value,onChange
    return (
                <Viewer>
                    <h1>건물 관리자 로그인</h1>
                    <Input type="email" {...emailUseInput} />
                    <Input type="password" {...passwordUseInput} /> 
                    <Link to="/area/list">
                        {/*로그인버튼 누르면 로그인완료되고 건물목록 화면으로 */}
                        <LoginButton onClick={onLoginClick} />
                    </Link>
                    <Link to="/admin/signup">
                        <MoveToSignupButton>회원가입</MoveToSignupButton>
                    </Link>
                </Viewer>
    );
}
