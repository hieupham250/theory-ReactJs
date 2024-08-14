import React from "react";
import UseState from "./components/UseState";
export default function App() {
  return (
    <div>
      App
      {/* 
         React Hook: là những hàm phương thức giúp cho function component 
        có thể thực hiện các tính năng y hệt như class component.
        - React hook được ả đời  ở phiên bản react 16.8 (2018)
        - trước khi hook ra dời thì function component chỉ đơn giản là tạo ra các Ui
        - hook ra đời giúp cho code ngắn gọn dễ dàng sử dụng  hơn so với class component
        - Khi làm việc với hook cần phải để ý đầu vào, đầu ra của các phương thức
        - các hook học:
        + useState
        + useEffect
        + useRef
        + useMemo
        + useCallback
        + useReducer
      */}
      <UseState></UseState>
    </div>
  );
}
