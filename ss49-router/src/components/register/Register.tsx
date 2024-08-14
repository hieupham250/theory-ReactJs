import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  pass: string;
}

export default function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState<User[]>([]);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    // lấy giá trị người dùng nhập vào
    // xử lý những tác vụ
    // check ok hết (validate)
    // muốn chuyển sang trang login
    navigate("/login", { state: user });
  };
  return (
    <div>
      Register
      <label htmlFor="">email</label>
      <input type="text" name="email" onChange={handleInput}></input>
      <br />
      <label htmlFor="">pass</label>
      <input type="text" name="pass" onChange={handleInput} />
      <br />
      <button onClick={register}>register</button>
    </div>
  );
}
