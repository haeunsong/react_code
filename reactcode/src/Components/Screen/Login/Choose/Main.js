import React,{useState}from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { ChooseAdminButton, ChooseVisitorButton } from './Button';
import Viewer from './Resource/Style/StMain';

export const ChooseUser = ({setClickView}) => {


    return (
        <Viewer>
            <Link to="/admin/login">
                <ChooseAdminButton onClick={()=>setClickView("adminLoginView")}>관리자 클릭</ChooseAdminButton>
            </Link>
            <Link to="/kiosk">
                <ChooseVisitorButton onClick={()=>setClickView("visitorLoginView")}>방문자 클릭</ChooseVisitorButton>
            </Link>
        </Viewer>
    )
}

export default ChooseUser;