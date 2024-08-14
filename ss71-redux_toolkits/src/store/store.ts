import { configureStore } from "@reduxjs/toolkit";
import dung from "./reducers/countReducer";
export const store = configureStore({
  reducer: {
    count: dung, // count là tên truy cập, dung là giá trị thì phải đúng đường dẫn
  },
});
