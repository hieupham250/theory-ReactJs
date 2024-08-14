import React, { useState } from "react";

interface User {
  userName: string;
  email: string;
}

export default function Function() {
  //   const [username, setUsername] = useState<string>("");
  //   const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
  });
  // hàm xử lí khi click vào button
  const handleClick = () => {
    console.log("hello");
  };
  // gọi hàm theo kiểu truyền tham số
  const handleDelete = (userID: any) => {
    console.log("userID", userID);
  };
  // khai báo hàm đăng kí
  const register = () => {
    // console.log(`đã ấn vào đăng kí username:${username}, email:${email}`);
    console.log("user đăng ký", user);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // khai báo hàm handleChange
  //   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(e.target.value);
  //     setUsername(e.target.value);
  //   };
  //   const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(e.target.value);
  //   };
  return (
    <div>
      Function
      <p onClick={() => handleDelete(5)}>Hoa</p>
      <button onClick={handleClick}>Click</button>
      <label htmlFor="">username</label>
      <input onChange={handleChange} name="userName" type="text" /> <br />
      <label htmlFor="">email</label>
      <input onChange={handleChange} name="email" type="text" /> <br />
      <button onClick={register}>register</button>
    </div>
  );
}
