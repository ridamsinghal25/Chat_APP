import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

// might create a problem of serializable check

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
