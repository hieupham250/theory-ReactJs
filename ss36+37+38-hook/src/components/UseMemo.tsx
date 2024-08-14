import React, { useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// có logic tính toán như sau
let cart: Product[] = [
  {
    id: 1,
    name: "iphone6",
    price: 5000,
    quantity: 5,
  },
  {
    id: 1,
    name: "iphone7",
    price: 6000,
    quantity: 6,
  },
  {
    id: 1,
    name: "iphone8",
    price: 7000,
    quantity: 7,
  },
];

export default function UseMemo() {
  const [count, setCount] = useState<number>(0);
  const [myCart, setMyCart] = useState<Product[]>(cart);

  // đi tính toán giá phải trả
  let price = useMemo(() => {
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return payment;
  }, [myCart]);

  // khai hàm thêm sản phẩm vào giỏ hàng
  const addCart = () => {
    let newProduct = {
      id: 11,
      name: "samsung",
      price: 8000,
      quantity: 2,
    };
    myCart.push(newProduct);
    setMyCart([...myCart]);
  };
  return (
    <div>
      UseMemo
      {/* 
      memory: ghi nhớ
      đây là hook trong react sinh ra giúp ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại khi cần thiết
    */}
      <p>giá phải trả {price}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Changeount
      </button>
      <button onClick={addCart}>Add product</button>
    </div>
  );
}
