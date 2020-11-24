import React from 'react';
import AddAreaList from '../../../Components/Screen/Admin/Area/AddAreaList';
import ManageIndex from '../../../Components/Screen/Admin/ManageArea/ManageIndex';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Area = () => {
    return (
        <Switch>
          <Route exact path="/area/list" component={AddAreaList} />
          <Route exact path="/area/ManageIndex" component={ManageIndex} />
        </Switch>
            
    );
};

export default Area;