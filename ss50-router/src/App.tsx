import React from "react";
import ListProduct from "./pages/ListProduct";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/product-detail/:Id" element={<ProductDetail />}></Route>
        <Route path="/list-product" element={<ListProduct />}></Route>
      </Routes>
    </>
  );
}
