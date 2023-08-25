import { configureStore } from "@reduxjs/toolkit";
import UsersDetail from "../slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: "loggedInUserDetails",
  storage
};

const persistedReducer = persistReducer(persistConfig, UsersDetail);

export const store = configureStore({
    reducer: {
      user: persistedReducer,
    },
  });