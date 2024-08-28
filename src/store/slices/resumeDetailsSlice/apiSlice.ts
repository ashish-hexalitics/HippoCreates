import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";
import { IUserInfo } from "../../../dto/user.dto";
import { IUserEmployment } from "../../../dto/employment.dto";

export const userResumeApi: any = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    getUserResumeInfo: builder.query<any, void>({
      query: () => ({
        url: `/users/get/resume-data`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateUserResumeInfo: builder.mutation<any, IUserInfo>({
      query: (credentials) => ({
        url: `/users/info/${credentials.userId}`,
        method: "PUT",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateUserResumeEmployments: builder.mutation<any, IUserEmployment>({
      query: (credentials) => ({
        url: `/employments`,
        method: "POST",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetUserResumeInfoQuery,
  useUpdateUserResumeInfoMutation,
  useUpdateUserResumeEmploymentsMutation,
} = userResumeApi;
