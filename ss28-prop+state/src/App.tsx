import Functional from "./components/Functional";
import Class from "./components/Class";
import StateClass from "./components/StateClass";
import StateFunctional from "./components/StateFunctional";
const fullName: string = "Hiếu";
const students: string[] = ["hà", "tâm"];
const age: number = 25;
const numbers: number[] = [1, 2, 3, 4, 5];
export default function App() {
  return (
    <div>
      App
      {/* props và this.state
      1. props: properties => dùng để truyền dữ liệu từ component cha sang component con
      2. state*/}
      <Functional name={fullName} students={students}></Functional>
      <Class age={age} numbers={numbers}></Class>
      <StateFunctional></StateFunctional>
      <StateClass></StateClass>
    </div>
  );
}
