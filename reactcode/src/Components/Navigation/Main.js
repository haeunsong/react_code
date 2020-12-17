import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Visitor from "../Screen/Visitor/Container/Main";

const Main = () => {
  return (
    <BrowserRouter>
      <Route path="/visitor" component={Visitor} />
    </BrowserRouter>
  );
};

export default Main;
