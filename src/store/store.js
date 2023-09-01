import { configureStore } from "@reduxjs/toolkit";
// import UsersDetail from "../slices/userSlice";
import URLDetails from "../slices/URLSlice";

export const store = configureStore({
  reducer: {
    // user: UsersDetail,
    URL: URLDetails
  },
});