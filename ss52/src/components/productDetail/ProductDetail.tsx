import React from "react";
import "./productDetail.css";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  // lấy id ra
  const { productId } = useParams();
  const products = [
    {
      id: 11,
      name: "iphone",
      price: 50000,
      decriiption: "",
      stock: 5, // hàng tồn kho
      images:
        "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg",
    },
    {
      id: 12,
      name: "iphone",
      price: 50000,
      decriiption: "",
      stock: 5, // hàng tồn kho
      images:
        "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg",
    },
    {
      id: 13,
      name: "iphone",
      price: 50000,
      decriiption: "",
      stock: 5, // hàng tồn kho
      images:
        "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg",
    },
    {
      id: 14,
      name: "iphone",
      price: 50000,
      decriiption: "",
      stock: 5, // hàng tồn kho
      images:
        "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg",
    },
  ];
  const productDetail = products.filter((item) => {
    return item.id === Number(productId);
  });
  return (
    <div>
      ProductDetail
      <p>name: {productDetail[0].name}</p>
      <p>giá: {productDetail[0].price}</p>
      <p>mô tả: {productDetail[0].decriiption}</p>
    </div>
  );
}
