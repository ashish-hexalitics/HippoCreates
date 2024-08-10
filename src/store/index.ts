import { configureStore,Store } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice";
import { categoryApi  } from "./slices/categorySlice/apiSlice";
import categorySlice from "./slices/categorySlice/categorySlice";
import { userApi  } from "./slices/userSlice/apiSlice";

export const store:Store = configureStore({
  reducer: {
    [userApi.reducerPath]:userApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    userSlice,
    categorySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;