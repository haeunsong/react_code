import React from 'react';

// 건물 관리 화면
// 각 건물별로 출입기록, 관리자 목록, 출입기록 받기, 키오스크 화면
// area/manage
const ManageArea = () => {
    return (
        <div>
            <button className='accessLog'>출입기록</button>
            <button className='adminList'>관리자 목록</button><br/>
            <button className='downloadAccessLog'>출입기록 받기</button>
            <button className='kiosk'>키오스크</button>
        </div>

    );
};

export default ManageArea;