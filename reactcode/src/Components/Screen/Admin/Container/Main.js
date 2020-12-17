import React from "react";

import Login from "../Main";
import { getUserToken } from "../Auth/Main";
import Dashboard from "../Dashboard/Main";

const Main = () => {
  return <>{getUserToken() ? <Dashboard /> : <Login />}</>;
};

export default Main;
