import React from 'react';
import { Link, Route, BrowserRouter as Router,Switch } from "react-router-dom"
import AccessLog from './AccessLog';
import DownloadAccessLog from './DownloadAccessLog';
import ShowAdminList from './ShowAdminList';

// 해당 건물 클릭시 네가지 선택지 제공화면
// area/ManageIndex
const ManageIndex = () => {
    return (
        <div>
        <Router>
            <header>
                <Link to="/area/accesLog">
                    <button className='accessLog'>출입기록</button>     
                </Link>
                <Link to="/area/adminList">
                    <button className='adminList'>관리자 목록</button><br/><br/><br/>
                </Link>
                <Link to="/area/downloadAccessLog">
                    <button className='downloadAccessLog'>출입기록 받기</button>
                </Link>
                <Link to="/area/kiosk">
                    <button className='kiosk'>키오스크</button>
                </Link>
            </header>
            <hr />
            <Switch>
                <Route exact path="/area/accessLog" component={AccessLog}/>
                <Route exact path="/area/adminList" component={ShowAdminList}/>
                <Route exact path="/area/downloadAccessLog" component={DownloadAccessLog}/>
            </Switch>
            
        
        </Router>
        </div>
    );
};

export default ManageIndex;