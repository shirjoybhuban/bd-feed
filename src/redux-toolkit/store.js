import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    orderSlice,
  },
  devTools: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const persistor = store;
