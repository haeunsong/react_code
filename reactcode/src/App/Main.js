import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Admin from './Router/Route/Admin'
import Area from './Router/Route/Area'
import Visitor from './Router/Route/Visitor'

const Main = () => {
  return (
      <Router>
          <Admin />
          <Area />
          <Visitor />
      </Router>
  );
}

export default Main;
