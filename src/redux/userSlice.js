import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    handleToken: (state, action) => {
      console.log(action);
      state.token = action.payload;
    },
  },
});
export const { handleToken } = userSlice.actions;
export default userSlice.reducer;
