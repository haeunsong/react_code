import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChooseUser from '../../Screen/Choose/Main'

const Main = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ChooseUser} />
        </BrowserRouter>
 
    );
};

export default Main;