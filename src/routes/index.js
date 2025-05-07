import React from "react";
import { Routes, Route } from 'react-router-dom';

import MyRoute from "./MyRoute";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Users from "../pages/Users";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<MyRoute/>}>
        <Route path='/users/:id/edit' element={<Users/>} />
        <Route path='/fotos/:id' element={<Fotos/>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/users/register" element={<UserRegister />} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}



