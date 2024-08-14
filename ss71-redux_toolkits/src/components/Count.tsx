import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../store/reducers/countReducer";

export default function Count() {
  const state: any = useSelector((state) => state);
  const dispath = useDispatch();
  return (
    <div>
      <p>giá trị count: {state.count}</p>
      <button onClick={() => dispath(increase())}>tăng</button>
      <button onClick={() => dispath(decrease())}>giảm</button>
    </div>
  );
}
