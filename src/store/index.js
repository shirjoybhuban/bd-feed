import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/postSlice";

export const store = configureStore({
  reducer: {
    postSlice,
  },
  devTools: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const returnedStore = store;
