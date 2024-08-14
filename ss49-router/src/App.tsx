import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Notfound from "./components/Notfound";
import About from "./components/about/About";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <>
      REACT ROUTER DOM
      {/* 
      là 1 thư viện
      tạo một bộ định tuyến cho trang web của mình sẽ cho phép react element được hiển thị ứng với các đường
      dẫn URL
      cách dùng:
      cài đặt: npm i react-router-dom
      dùng component browserRouter để cung cấp bộ định tuyến cho toàn bộ app

    */}
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}
