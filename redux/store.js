"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {},
});
