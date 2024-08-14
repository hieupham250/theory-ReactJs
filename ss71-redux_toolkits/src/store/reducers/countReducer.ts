import { createSlice } from "@reduxjs/toolkit";

// khỏi tạo state
const countState: number = 0;
const countReducer = createSlice({
  name: "countCeducer",
  initialState: countState,
  reducers: {
    // đây là nhưng action
    increase: (state) => (state += 1),
    decrease: (state) => (state -= 1),
  },
});
// xuất ra những action
export const { increase, decrease } = countReducer.actions;
// xuất ra reducer
export default countReducer.reducer;
