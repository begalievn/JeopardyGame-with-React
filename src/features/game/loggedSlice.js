import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
  },
});

export const { login } = loggedSlice.actions;

export default loggedSlice.reducer;
