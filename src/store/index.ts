import { configureStore,Store } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice";
import { userApi  } from "./slices/userSlice/apiSlice";

export const store:Store = configureStore({
  reducer: {
    [userApi.reducerPath]:userApi.reducer,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;