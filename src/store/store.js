import { configureStore } from "@reduxjs/toolkit";
import UsersDetail from "../slices/userSlice";
import URLDetails from "../slices/URLSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: "loggedInUserDetails",
  storage
};

const persistConfigForURL = {
  key: "URLShoternedByLoggedInUser",
  storage
}

const persistedReducer = persistReducer(persistConfig, UsersDetail);
const persistedReducerForUrl = persistReducer(persistConfigForURL, URLDetails);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    URL: persistedReducerForUrl
  },
});