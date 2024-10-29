import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    profile: {
      currentPictureAddress: "Not-set",
      profileCompletionPercentage: 0,
      userImage: [],
      email: "Example@gmail.com",
      phoneNumber: "09XXXXXXXXX",
      lastName: "LastName",
      firstName: "FirstName",
      aboutMe: "hiiiiiiiiiiiiiiiiiiii",
      linkdinProfile: null,
      telegramLink: null,
      receiveMessageEvent: false,
      address: null,
      nationalCode: null,
      gender: false,
      birthDate: "0001-01-01T00:00:00",
      latitude: null,
      longitude: null,
    },
  },
  reducers: {
    handleToken: (state, action) => {
      state.token = action.payload;
    },
    setProfileInfo: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { handleToken, setProfileInfo } = userSlice.actions;
export default userSlice.reducer;
