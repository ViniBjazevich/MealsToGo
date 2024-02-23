import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIsLoading: false,
  user: {}
}

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
  },
});

export const { loginUser, logoutUser, updateUserLoading } = userSlice.actions;

export default userSlice.reducer;
