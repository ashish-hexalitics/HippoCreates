import { configureStore, Store } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice";
import { categoryApi } from "./slices/categorySlice/apiSlice";
import categorySlice from "./slices/categorySlice/categorySlice";
import { userApi } from "./slices/userSlice/apiSlice";
import { userResumeApi } from "./slices/resumeDetailsSlice/apiSlice";
import resumeDetailsSlice from "./slices/resumeDetailsSlice/resumeDetailSlice";
import {skillApi} from "./slices/skilSlice/apiSlice";
import skillSlice from "./slices/skilSlice/skillSlice";
import adminLayoutSlice from "./slices/adminLayoutSlice/adminLayoutSlice";
import resumeDetailSlice from "./slices/resumeTemplateSlice/resumeDetailSlice";
import { aiApi } from "./slices/ai/aiApi";




export const store: Store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userResumeApi.reducerPath]: userResumeApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
    [aiApi.reducerPath]:aiApi.reducer,
    userSlice,
    categorySlice,
    resumeDetailsSlice,
    skillSlice,
    adminLayoutSlice,
    resumeDetailSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(categoryApi.middleware)
      .concat(userResumeApi.middleware)
      .concat(skillApi.middleware)
      .concat(aiApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
