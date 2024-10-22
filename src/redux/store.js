import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import DarkModeSlice from "./darkModeSlice";
import phoneSlice from "./PhoneSlice";
const store = configureStore({
  reducer: {
    userSlice,
    DarkModeSlice,
    phone: phoneSlice,
  },
});
export default store;
