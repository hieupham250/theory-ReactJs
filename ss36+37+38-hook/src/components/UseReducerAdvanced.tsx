import React, { useReducer } from "react";

interface Todo {
  id: number;
  name: string;
  isloading: boolean;
}

export default function UseReducerAdvanced() {
  /*
        thực hành todolist dùng useReducer
    */
  // khai báo state trước
  const inittial = {
    todos: [],
    isloading: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };
  // khởi tạo hàm tạo action
  const action = (type: any, payload: any) => {
    return {
      type: type,
      payload: payload,
    };
  };
  // khởi tạo reducer
  const reducer = (state: any = inittial, action: any): any => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          todo: {
            ...state.todo,
            name: action.payload,
          },
        };
      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              ...action.payload,
              id: Math.floor(Math.random() * 10000000000000),
            },
          ],
        };
      default:
        return state;
    }
  };
  const [state, dispath] = useReducer(reducer, inittial);
  // laassy giá trị input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispath(action("CHANGE_INPUT", inputValue));
  };
  // hàm thêm công việc
  const addTodo = () => {
    dispath(action("ADD_TODO", state.todo));
  };
  return (
    <div>
      UseReducerAdvanced <br />
      <input onChange={handleChange} type="text" />
      <button onClick={addTodo}>Thêm công việc</button>
      <p>danh sách công việc</p>
      {state.todos.map((item: Todo, index: number) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}
