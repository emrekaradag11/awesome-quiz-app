import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  value: 10,
  step: 1,
} as any;

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  }
});

export const { increment, setStep, setUser } = rootSlice.actions;

export default rootSlice.reducer;
