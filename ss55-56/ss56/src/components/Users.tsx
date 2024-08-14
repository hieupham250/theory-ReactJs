import React from "react";

export default function Users() {
  fetch("http://localhost:3000/user")
    .then((data) => data.json())
    .then((data) => console.log(data));
  return <div>Users</div>;
}
