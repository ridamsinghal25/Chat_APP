import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";
import { encryptData, decryptData } from "./utils";

// might create a problem of serializable check

const myTransforms = createTransform(
  function (inboundState) {
    const modifiedState = {
      ...inboundState,
      userData: encryptData(inboundState.userData),
    };
    return modifiedState;
  },
  function (outboundState) {
    const modifiedState = {
      ...outboundState,
      userData: decryptData(outboundState.userData),
    };
    return modifiedState;
  }
);

const persistConfig = {
  key: "root",
  storage,
  // transforms: [myTransforms],
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
