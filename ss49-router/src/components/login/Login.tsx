import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
  // dùng hook useLocation của react-router-dom cung cấp
  const location = useLocation();
  console.log(location);

  return (
    <div>
      Login
      <label htmlFor="">email</label>
      <input type="text" value={location.state.email} />
      <br />
      <label htmlFor="">pass</label>
      <input type="text" value={location.state.pass} />
      <br />
      <button>Login</button>
    </div>
  );
}
