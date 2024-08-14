import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface";
import axios from "axios";

const user: User[] = [];
export const getUser: any = createAsyncThunk("users/getAllUser", async () => {
  const response = await axios.get("http://localhost:8080/users");
  return response.data;
});
export const addUser: any = createAsyncThunk("users/addUser", async () => {
  const response = await axios.post("http://localhost:8080/users", user);
  return response.data;
});
const reducerUser = createSlice({
  name: "user",
  initialState: {
    user: user,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state: any, action: any) => {
        // trạng thái chờ lấy dữ liệu
      })

      .addCase(addUser.fulfilled, (state: any, action: any) => {
        // trạng thái lấy dữ liệu thành công
        state.user = action.payload;
      })
      .addCase(getUser.fulfilled, (state: any, action: any) => {
        // trạng thái lấy dữ liệu thành công
        state.user.push(action.payload);
      });
  },
});
export default reducerUser.reducer;
