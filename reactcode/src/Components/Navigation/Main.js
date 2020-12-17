import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Visitor from "../Screen/Visitor/Container/Main";
import Admin from "../Screen/Admin/Container/Main";

const Main = () => {
  return (
    <BrowserRouter>
      <Route path="/visitor" component={Visitor} />
      <Route path="/admin" component={Admin} />
    </BrowserRouter>
  );
};

export default Main;
