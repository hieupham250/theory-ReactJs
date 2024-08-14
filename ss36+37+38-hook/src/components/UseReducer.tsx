import React, { useReducer } from "react";

export default function UseReducer() {
  // đi khai báo giá trị khoier tạo
  const inittial: number = 0;
  // khởi tạo reducer1
  const reducer1 = (sate = inittial, action: any) => {
    console.log("action", action);

    switch (action.type) {
      case "INCREASE":
        return sate + action.payload;
      case "DECREASE":
        return sate - action.payload;
      default:
        return sate;
    }
  };
  /*
    đối với những action có dữ liệu phức tạp thì nên tạo ra 1 function
  */
  const action = (type: string, payload: number) => {
    return {
      type: type, // cách 2 type
      payload: payload, // cách 2 payload
    };
  };
  //dùng destructoring để hứng lấy kết quả
  const [count, dispath] = useReducer(reducer1, inittial);
  // hàm xử lý tăng count
  const increase = () => {
    dispath(action("INCREASE", 1));
  };
  // hàm xử lý giảm count
  const decrease = () => {
    dispath(action("DECREASE", 1));
  };
  return (
    <div>
      UseReducer
      {/* 
      là một hook để làm:
        1. quản lý những state phức tạp
          + khi muốn quản lý state thì thường dùng useState (quản lý sate đơn giản) 
          + về bản chất những gì useState làm được thì useReducer cũng làm được
          nhưng nó sẽ đi những sate phức tạp hơn
        2. tiền đề sau này học redux (thư viện giúp tạo ra 1 kho chứa dư liệu)

      cách dùng:
      - nó là một hook để dùng
      B1: import nó vào
      B2: useReducer()
      nhận vào 2 tham số
        1. hàm reducer
        2. giá trị khởi tạo
    */}
      <p>Giá trị của biến count trong reducer: {count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}
