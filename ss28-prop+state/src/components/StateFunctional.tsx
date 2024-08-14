import React, { useState } from "react";

export default function StateFunctional() {
  const [number, setNumber] = useState<number>(1);
  // khi dùng useState bắt buộc phải khai báo kiểu dữ liệu cho nó
  const [fullName1, setFullName1] = useState<string>("91");
  // hàm useState trả về 1 cái mảng bên trong mảng có 2 gia trị
  // 1 là giá trị 1 , 2 là 1 cái hàm xử lý

  // khai báo hàm
  const handleClick = () => {
    setNumber(number + 1);
  };
  // khi muốn cập nhật state thì dùng set
  return (
    <div>
      StateFunctional
      {/* React ra đời 2013
        trước đó function ko thể quản lý state được mà chỉ quản lý
        state được ở trong class
        
        năm tháng 10/2018: Hook ra đời bổ sung cho function có thể quản lý
        state được useState*/}
      <p>giá trị number ban đâu {number}</p>
      <button onClick={handleClick}></button>
      <p>xin chào {fullName1}</p>
    </div>
  );
}
