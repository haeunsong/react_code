import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import {ChooseAdminButton,ChooseVisitorButton} from './Button';
import Viewer from '../../Resource/Style/StMain';

export const ChooseUser=()=>{
    return (
        <Viewer>
            <Link to="/admin/login">
                <ChooseAdminButton />
            </Link>
            <Link to="/dashboard/kiosk">
                <ChooseVisitorButton />
            </Link>
        </Viewer>
    )
}

export default ChooseUser;