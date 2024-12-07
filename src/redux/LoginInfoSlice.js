// LoginInfoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const LoginInfoSlice = createSlice({
  name: "login",
  initialState: {
    LoginInfo: {
      PhoneOrGmail: "",
      Password: "",
      rememberMe: true,
    },
  },
  reducers: {
    handleLoginInfo: (state, action) => {
      state.LoginInfo = action.payload;
    },
  },
});

export const { handleLoginInfo } = LoginInfoSlice.actions;
export default LoginInfoSlice.reducer; // Default export the reducer
