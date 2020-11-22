import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// admin 관리자 로그인, 가입, 인증
import AdminLogin from './Components/Screen/Admin/AdminLogin';
import AdminSignUp from './Components/Screen/Admin/AdminSignUp';
import AdminAuth from './Components/Screen/Admin/AdminAuth';

// 지역 관리
import AreaList from './Components/Screen/Area/AreaList';
import ManageArea from './Components/Screen/Area/ManageArea';

// visitor 방문자 로그인(전화번호 인증), 상세정보 입력
import PhoneAuth from './Components/Screen/Visitor/PhoneAuth';
import VisitorForm from './Components/Screen/Visitor/VisitorForm';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/signup" component={AdminSignUp} />
          <Route exact path="/admin/AdminAuth" component={AdminAuth} />

          <Route exact path="/area/list" component={AreaList} />
          <Route exact path="/area/manage" component={ManageArea} />

          <Route exact path="/checkin/visitor" component={VisitorForm} />
          <Route exact path="/checkin/phone" component={PhoneAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
