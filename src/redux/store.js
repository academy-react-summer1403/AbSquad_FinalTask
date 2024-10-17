import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import DarkModeSlice from "./darkModeSlice";
const store = configureStore({
  reducer: {
    userSlice,
    DarkModeSlice,
  },
});
export default store;
