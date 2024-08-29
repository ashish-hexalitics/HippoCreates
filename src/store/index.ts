import { configureStore, Store } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice";
import { categoryApi } from "./slices/categorySlice/apiSlice";
import categorySlice from "./slices/categorySlice/categorySlice";
import { userApi } from "./slices/userSlice/apiSlice";
import { userResumeApi } from "./slices/resumeDetailsSlice/apiSlice";
import resumeDetailsSlice from "./slices/resumeDetailsSlice/resumeDetailSlice";
import {skillApi} from "./slices/skilSlice/apiSlice";
import skillSlice from "./slices/skilSlice/skillSlice";


export const store: Store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userResumeApi.reducerPath]: userResumeApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
    userSlice,
    categorySlice,
    resumeDetailsSlice,
    skillSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(categoryApi.middleware)
      .concat(userResumeApi.middleware)
      .concat(skillApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
