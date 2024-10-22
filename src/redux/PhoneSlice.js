import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    phoneNumber: "", // Initial state to store the phone number
  },
  reducers: {
    handlePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload; // Store the phone number
    },
  },
});

export const { handlePhoneNumber } = phoneSlice.actions;
export default phoneSlice.reducer;
