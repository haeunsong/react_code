import React, { useEffect, useState } from "react";

import Login from "../Main";
import { getUserToken } from "../Auth/Main";
import Dashboard from "../Dashboard/Main";
import {authService} from "../../../../fbase";
import AppRouter from "./Router";

const Main = () => {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);


    })

  },[])

  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing.."};
    


  
  
    </>
  )
};

export default Main;
