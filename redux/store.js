import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
