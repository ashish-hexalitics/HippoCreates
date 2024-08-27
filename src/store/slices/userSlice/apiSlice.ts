import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";

interface LoginRequest {
  email: string;
  password: string;
}

enum Orientation {
  portrait = "portrait",
  landscape = "landscape",
}
enum Size {
  A4 = "A4",
  Letter = "Letter",
  Legal = "Legal",
  Tabloid = "Tabloid",
  A3 = "A3",
  A5 = "A5",
  Custom = "Custom",
}
interface Element {
  id: number;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  content: string;
  color: string;
  fontSize: number;
  fontWeight: string;
  padding: number;
}
interface TemplateRequest {
  document: string;
  orientation: Orientation;
  size: Size;
  layer: Element[];
}
interface UserInfoRequest {
  userId: string;
}
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: string; 
}
export const userApi: any = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<any, RegisterRequest>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query<any, void>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    getUserInfo: builder.query<any, void>({
      query: (userId) => ({
        url: `/users/info/${userId}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateUserInfo: builder.mutation<any, UserInfoRequest>({
      query: (credentials) => ({
        url: `/users/info/${credentials.userId}`,
        method: "PUT",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => ({
        url: `/users`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    createTemplates: builder.mutation<any, TemplateRequest>({
      query: (credentials) => ({
        url: `/resume/create/template`,
        method: "POST",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    getTemplates: builder.query<any, void>({
      query: () => ({
        url: `/resume/get/templates`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    getTemplate: builder.query<any, void>({
      query: (templateId) => ({
        url: `/resume/get/template/${templateId}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateTemplate: builder.mutation<any, Partial<any>>({
      query: (credentials) => ({
        url: `/resume/update/template/${credentials.templateId}`,
        method: "PUT",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    deleteTemplate: builder.mutation<any, void>({
      query: (templateId) => ({
        url: `/resume/delete/template/${templateId}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useGetTemplatesQuery,
  useCreateTemplatesMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useGetTemplateQuery,
  useUpdateTemplateMutation,
  useDeleteTemplateMutation,
} = userApi;
