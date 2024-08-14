import React from "react";
import "./products.css";
import { Outlet, useNavigate } from "react-router-dom";
export default function Products() {
  const navigate = useNavigate();
  /*
        lấy dữ kiệu về render
    */
  // fetch data: tạo mock data trước
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
  // hàm click từng sản phẩm
  const handleClick = (id: number) => {
    console.log(id);
    navigate(`/productDetail/${id}`);
  };
  return (
    <div className="container">
      Products
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>Tên sản phẩm {item.name}</p>
            <p>giá {item.price}</p>
            <p>
              ảnh
              <img src={item.images} alt="" />
            </p>
            <button>mua</button>
            <button onClick={() => handleClick(item.id)}>xem chi tiết</button>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}
