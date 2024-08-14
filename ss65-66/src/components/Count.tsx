import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../actions/index";
export default function Count() {
  // để láy dữ liệu ở trong kho thì dùng useSelector()
  const stateCount: any = useSelector((state) => {
    return state;
  });
  // muốn bắn action (những hành động tương tác) => dùng useDispath
  const dispath = useDispatch();
  // console.log(stateCount);
  // useSelector nhiệm vụ kiểm tra xem state có thay đổi hay ko thì cập nhật lại UI
  // những state phải thay đổi
  // [...]
  const increase = () => {
    dispath(actionCount("INCREASE", 1));
  };
  const decrease = () => {
    dispath({
      type: "DECREASE",
    });
  };
  return (
    <div>
      Count
      <p>giả trị thằng count {stateCount.reducerCount}</p>
      <button onClick={increase}>tăng</button>
      <button onClick={decrease}>giamr</button>
    </div>
  );
}
