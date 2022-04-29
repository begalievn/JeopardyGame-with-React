import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "",
  },
  reducers: {
    writeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { writeName } = nameSlice.actions;

export default nameSlice.reducer;
