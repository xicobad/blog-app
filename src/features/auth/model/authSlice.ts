import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
