import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import DarkModeSlice from "./darkModeSlice";
import phoneSlice from "./PhoneSlice";
import LoginInforSlice from "./LoginInfoSlice";
const store = configureStore({
  reducer: {
    userSlice,
    DarkModeSlice,
    phone: phoneSlice,
    LoginInforSlice,
  },
});
export default store;
