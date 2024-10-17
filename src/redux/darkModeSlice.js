import { createSlice } from "@reduxjs/toolkit";

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    mode: "off",
  },
  reducers: {
    HandleDarkMode: (darkMode, action) => {
      darkMode.mode = action;
    },
  },
});
export const { HandleDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
