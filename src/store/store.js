import { configureStore } from "@reduxjs/toolkit";
import URLDetails from "../slices/URLSlice";

export const store = configureStore({
  reducer: {
    URL: URLDetails
  },
});