import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    add: (state) => {
      state.count += 1;
    },
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
