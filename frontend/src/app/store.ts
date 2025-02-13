import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";

// const state = {};

export const store = configureStore({
  // preloadedState: state,
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
