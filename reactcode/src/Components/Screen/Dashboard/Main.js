import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import { AccessLogButton,DlAccessLogButton,KioskButton,AdminListButton } from './Button';
import {Viewer} from '../../Resource/Style/StMain';

export const AreaList=()=>{
    return(
            <Viewer>
                <h1>건물목록</h1>
            </Viewer>
    )
}

export const Dashboard=()=>{
    return (
                <Viewer>
                    <h1>dashboard</h1>
                    <Link to="/dashboard/accesslog">
                        <AccessLogButton />
                    </Link>
                    <Link to="/dashboard/dlaccesslog">
                        <DlAccessLogButton />
                    </Link>
                    <Link to="/dashboard/adminlist">
                        <AdminListButton />
                    </Link>
                    <Link to="/dashboard/kiosk">
                        <KioskButton />
                    </Link>
        
                </Viewer>
    )
    
}
export const AccessLog=()=>{
    return(
            <Viewer>
                <h1>출입기록</h1>
                
            </Viewer>
    )
 
}
export const DownloadAccessLog=()=>{
    return(
            <Viewer>
                <h1>출입기록 다운로드</h1>
                
            </Viewer>
    )

}

export const AdminList=()=>{
    return (
        <Viewer>
            <h1>관리자 목록</h1>
            
        </Viewer>

    )
}
export const Kiosk=()=>{
    return(
            <Viewer>
                <h1>키오스크</h1>
                
            </Viewer>
    )

}