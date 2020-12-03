import React from 'react';
import {AdminChoiceButtonViewer,VisitorChoiceButtonViewer} from './Resource/Style/StButton';

export const AdminChoiceButton=({onClick})=>(
    <AdminChoiceButtonViewer onClick={onClick}>관리자</AdminChoiceButtonViewer>
)
export const VisitorChoiceButton=({onClick})=>(
    <VisitorChoiceButtonViewer onClick={onClick}>방문자</VisitorChoiceButtonViewer>
)