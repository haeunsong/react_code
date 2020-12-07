import React from 'react';
import {ChooseAdminButtonViewer,ChooseVisitorButtonViewer} from './Resource/Style/StButton';

export const ChooseAdminButton=({onClick})=>(
    <ChooseAdminButtonViewer onClick={onClick}>관리자</ChooseAdminButtonViewer>
)
export const ChooseVisitorButton=({onClick})=>(
    <ChooseVisitorButtonViewer onClick={onClick}>방문자</ChooseVisitorButtonViewer>
)