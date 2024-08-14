import React from "react";

export default function Funcitonal() {
  const age: number = 20;
  const fullName: string = "minh thu";
  const arr: string[] = ["hoa", "hồng", "hà"];
  type Obj = {
    name: string;
    age: number;
    address: string;
  };
  const newStudent: Obj = {
    name: "phuong",
    age: 25,
    address: "hà nội",
  };
  return (
    <>
      Funcitonal
      <p>xin chào {fullName}</p>
      <p>
        năm nay {fullName} {age} tuổi
      </p>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <p>{JSON.stringify(newStudent)}</p>
    </>
  );
}
