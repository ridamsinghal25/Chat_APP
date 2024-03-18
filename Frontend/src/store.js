import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

// might create a problem of serializable check
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
