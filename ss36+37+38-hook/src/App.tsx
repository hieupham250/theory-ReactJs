import React, { useCallback, useState } from "react";
import UseEffect from "./components/UseEffect";
// import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import Memo from "./components/Memo";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseReducerAdvanced from "./components/UseReducerAdvanced";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("hoa");

  const increase = useCallback(() => {
    const handleIncrease = () => {};
    return handleIncrease;
  }, []);
  /*
    khi mỗi lần function app re-render
    thì lại tạo ra 1 biến handleIncrease và gán giá trị là 1 function
    function là kiểu dữ kiệu tham chiếu refernce type
    cứ mỗi lần sẽ tạo biến mới là gán giá trị mới
  */
  return (
    <div>
      App
      {/* 
        trong component App mỗi khi component re-render hoặc render lần đầu thì các component con sẽ render.
      */}
      <p>giá trị count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click memo</button>
      <UseEffect></UseEffect>
      {/* <UseRef></UseRef> */}
      <UseContext></UseContext>
      <Memo increase={increase} name={name}></Memo>
      <UseCallback></UseCallback>
      <UseMemo></UseMemo>
      <UseReducer></UseReducer>
      <p>UseReducer nâng cao</p>
      <UseReducerAdvanced></UseReducerAdvanced>
    </div>
  );
}
