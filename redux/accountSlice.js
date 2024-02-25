import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIsLoading: false,
  user: {},
  location: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: () => initialState,
    updateUserLoading: (state, action) => {
      state.userIsLoading = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { loginUser, logoutUser, updateUserLoading, updateLocation } =
  userSlice.actions;

export default userSlice.reducer;
