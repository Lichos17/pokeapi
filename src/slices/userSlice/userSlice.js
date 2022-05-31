import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: localStorage.getItem("email") || "",
  },
  reducers: {
    setEmail: (state, actions) => {
      state.email = actions.payload.email;
    },
    setLogout: (state, actions) => {
      state.email = "";
    },
  },
});

export const { setEmail, setLogout } = userSlice.actions;
