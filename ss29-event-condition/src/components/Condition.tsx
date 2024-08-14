import React, { useState } from "react";
import Modal from "./Modal";

export default function Condition() {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    console.log("ấn vào hàm");
    setActive(!active);
  };
  return (
    <div>
      Condition (điều kiện để render)
      {active ? <Modal></Modal> : ""}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
