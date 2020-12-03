import React,{useState}from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { AdminChoiceButton, VisitorChoiceButton } from './Button';
import Viewer from './Resource/Style/StMain';

export const UserChoice = ({setClickView}) => {


    return (
        <Viewer>
            <Link to="/admin/login">
                <AdminChoiceButton onClick={()=>setClickView("adminLoginView")}>관리자 클릭</AdminChoiceButton>
            </Link>
            <Link to="/kiosk">
                <VisitorChoiceButton onClick={()=>setClickView("visitorLoginView")}>방문자 클릭</VisitorChoiceButton>
            </Link>
        </Viewer>
    )
}

export default UserChoice;