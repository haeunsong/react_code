import React from 'react';

// checkin/phone
// 외부 방문자 휴대전화 번호 인증 화면(외부 방문자 로그인)
const PhoneAuth = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="휴대전화 번호 ('-'제외 번호만 입력)" />
                <input className="sendPhoneNumBtn" type="submit" value="인증하기"/><br/>
                <input type="text" placeholder="인증코드(8자리):" /><br/>
                <input type ="text"placeholder="이름:" /><br/>
                <input type="text" placeholder="소속:"/><br/>
                <button className="form_submit_button" type="submit">확인</button>
            </form>
            
        </div>
    );
};

export default PhoneAuth;