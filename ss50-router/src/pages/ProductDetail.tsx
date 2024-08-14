import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  //   console.log(window.location.pathname.split("/")[2]);
  const { id } = useParams(); // lấy dữ liệu trên params
  console.log(useParams());

  return <div>{<h1>id: {id}</h1>}</div>;
}
