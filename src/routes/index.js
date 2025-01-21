import React from "react";
import { Route, Routes } from 'react-router-dom';

//import MyRoute from "./MyRoute";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}
