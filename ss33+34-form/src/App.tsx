import React from "react";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      App
      <p>Các kỹ thuật làm việc với form</p>
      {/* 
        2 kỹ thuật chính
        1. controlled
        2. uncontrolled (hook useRef)
        3. dùng thư viện formirk
        =================
        trong form
        1. ô input
        2. textarea
        3 select-option
      */}
      <Form></Form>
    </div>
  );
}
