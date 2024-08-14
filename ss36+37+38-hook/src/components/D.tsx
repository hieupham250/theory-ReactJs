import React, { useContext } from "react";
import { setUseContext } from "./UseContext";
export default function D() {
  const getData = useContext(setUseContext);
  return (
    <div>
      D<p>name: {getData}</p>
    </div>
  );
}
