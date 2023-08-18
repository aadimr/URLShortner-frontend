import { configureStore } from "@reduxjs/toolkit";
import UsersDetail from "../slices/userSlice";

export const store = configureStore({
    reducer: {
      user: UsersDetail,
    },
  });