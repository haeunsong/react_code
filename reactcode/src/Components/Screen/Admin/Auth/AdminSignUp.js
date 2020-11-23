import React from 'react';

// 건물 관리자 회원가입 화면
// admin/signup
const AdminSignUp = () => {
    return (
        <div>
            <span>건물 관리자 가입</span>
            <form action="/admin/login" method="post">
                <input name="adminEmail" type="email" placeholder="학내메일(***@office.skhu.ac.kr):"/>
                <input className="sendEmailBtn" type="submit" value="인증하기"/><br/>
                <input type="text" placeholder="학내메일 인증코드(8자리):"/><br/>
                <input type="text" placeholder="이름:"/><br/>
                <input type="text" placeholder="소속:"/><br/>
                <input type="text" placeholder="ID:"/><br/>
                <input type="password" placeholder="PW:"/><br/>
                <input type="password" placeholder="PW 확인:"/><br/>
                <input className="signUpBtn" type="submit" value="확인"/>
            </form>
                    
        </div>
    );
};

export default AdminSignUp;