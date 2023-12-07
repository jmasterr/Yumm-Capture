import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  hasCheckedAuth: false,
  isLoggingIn: false,
  isLoggingOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    setIsNotAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
    setHasCheckedAuth: (state) => {
      state.hasCheckedAuth = true;
    },
    setHasNotCheckedAuth: (state) => {
      state.hasCheckedAuth = false;
    },
    setIsLoggingIn: (state) => {
      state.isLoggingIn = true;
    },
    setIsNotLoggingIn: (state) => {
      state.isLoggingIn = false;
    },
    setIsLoggingOut: (state) => {
      state.isLoggingOut = true;
    },
    setIsNotLoggingOut: (state) => {
      state.isLoggingOut = false;
    },
  },
});

export const {
  setIsAuthenticated,
  setIsNotAuthenticated,
  setHasCheckedAuth,
  setHasNotCheckedAuth,
  setIsLoggingIn,
  setIsNotLoggingIn,
  setIsLoggingOut,
  setIsNotLoggingOut,
} = authSlice.actions;

export default authSlice.reducer;
