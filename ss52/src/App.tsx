import React from "react";
import Products from "./components/products/Products";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/productDetail/ProductDetail";

export default function App() {
  return (
    <div>
      App
      {/* 
      tạo danh sách sản phẩm ở trong component Products
      tạo component Product từng sản phẩm
      tạo component ProductDetail chi tiết từng sản phẩm

      các bước làm
      b1: 
    */}
      <Routes>
        <Route path="/" element={<Products />}>
          <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
