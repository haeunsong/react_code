import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import { AccessLogButton,DlAccessLogButton,KioskButton,AdminListButton } from './Button';
import {GlobalStyle} from '../../Resource/Style/StGlobal';
import {Viewer} from '../../Resource/Style/StMain';

export const AreaList=()=>{
    return(
        <>
        <GlobalStyle>
            <Viewer>
                <h1>건물목록</h1>
            </Viewer>
        </GlobalStyle>
        </>
    )
}

export const Dashboard=()=>{
    return (
        <>
            <GlobalStyle>
                <Viewer>
                    <h1>dashboard</h1>
                    <Link to="/dashboard/accesslog">
                        <AccessLogButton />
                    </Link>
                    <Link to="/dashboard/dlaccesslog">
                        <DlAccessLogButton />
                    </Link>
                    <Link to="/dashboard/kiosk">
                        <KioskButton />
                    </Link>
                    <Link to="/dashboard/adminlist">
                        <AdminListButton />
                    </Link>
        
                </Viewer>
            </GlobalStyle>
            </>
    )
    
}
export const AccessLog=()=>{
    return(
        <>
        <GlobalStyle>
            <Viewer>
                <h1>출입기록</h1>
                
            </Viewer>
        </GlobalStyle>
        </>
    );
 
}
export const DownloadAccessLog=()=>{
    return(
        <>
        <GlobalStyle>
            <Viewer>
                <h1>출입기록 다운로드</h1>
                
            </Viewer>
        </GlobalStyle>
        </>
    );

}
export const Kiosk=()=>{
    return(
        <>
        <GlobalStyle>
            <Viewer>
                <h1>키오스크</h1>
                
            </Viewer>
        </GlobalStyle>
        </>
    );

}
export const AdminList=()=>{
    return (
        <>
        <GlobalStyle />
        <Viewer>
            <h1>관리자 목록</h1>
            
        </Viewer>

        </>

    )
}
