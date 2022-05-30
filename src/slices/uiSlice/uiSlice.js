import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    light: true,
    grid: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.light = action.payload.theme;
    },
    setGrid: (state, action) => {
      state.grid = action.payload.grid;
    },
  },
});

export const { setTheme, setGrid } = uiSlice.actions;
