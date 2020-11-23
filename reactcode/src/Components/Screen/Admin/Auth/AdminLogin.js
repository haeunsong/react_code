import React from 'react';

// 건물 관리자 로그인 화면
// admin/login
const AdminLogin = () => {
    return (
        <div>
            <span>건물 관리자 로그인</span>
            <form>
                <input type="email" placeholder="메일주소를 입력하세요(@office.skhu.ac.kr):"/><br/>
                <input type="password" placeholder="비밀번호를 입력하세요:"/>
                <input className="loginBtn" type="submit" value="확인"/>
            </form>
            
        </div>
    );
};

export default AdminLogin;