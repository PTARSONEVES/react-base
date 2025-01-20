import React from "react";
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

//import MyRoute from "./MyRoute";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
//  console.log('function Routes');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login/>} />
        <Route path="*" element={<Page404/>} />
      </Switch>
    </BrowserRouter>
  );
}
