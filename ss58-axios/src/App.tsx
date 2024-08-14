import React, { useEffect } from "react";
import axios from "axios";

export default function App() {
  // useEffect(() => {
  //   // lấy tất cả bản ghi trong bảng user
  //   axios
  //     .get("http://localhost:8080/users")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   // lấy 1 bản ghi trong bảng user
  //   axios
  //     .get("http://localhost:8080/users/2")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   // đi thêm mới bản ghi trong bảng user
  //   let newUser = {
  //     name: "quỳnh",
  //     address: "vĩnh phúc",
  //   };
  //   axios
  //     .post("http://localhost:8080/users", newUser)
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // xóa 1 bản ghi trong bảng user
  //   axios
  //     .delete("http://localhost:8080/users/2")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // cập nhật 1 bản ghi trong bảng user
  //   // PUT, PAST
  //   // Khi cập nhật phải biết id của bản ghi cần cập nhật
  //   let updateUser = {
  //     name: "minh quang",
  //   };
  //   // axios
  //   //   .put("http://localhost:8080/users/3", updateUser)
  //   //   .then((res) => console.log("data", res))
  //   //   .catch((err) => console.log(err));
  //   axios
  //     .patch("http://localhost:8080/users/1", updateUser)
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // tìm kiếm theo ký tự có chữ "h" ở trong thuộc tính name
  //   axios
  //     .get("http://localhost:8080/users?name_like=h") // này là bất kì dâu có h
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // tìm kiếm theo ký tự có chữ "h" ở đầu trong thuộc tính name
  //   axios
  //     .get("http://localhost:8080/users?name_like=^h")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // lấy bẳng user ra sắp xếp các đổi tượng theo băng chữ cái
  //   // tăng dần: asc (ascending- tăng dần)
  //   // giảm dần: desc (descending- giảm dần)
  //   axios
  //     .get("http://localhost:8080/users?_sort=name&_order=asc")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    // lấy bẳng user ra sắp xếp các đổi tượng theo tuổi
    // tăng dần: asc (ascending- tăng dần)
    // giảm dần: desc (descending- giảm dần)
    axios
      .get("http://localhost:8080/users?_sort=age&_order=asc")
      .then((res) => console.log("data", res))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   // nếu muốn phân trang
  //   // chia 1 trang có bao nhiêu bản ghi
  //   axios
  //     .get("http://localhost:8080/users?_page=1&_limit=4")
  //     .then((res) => console.log("data", res))
  //     .catch((err) => console.log(err));
  // }, []);
  return <div>App</div>;
}
