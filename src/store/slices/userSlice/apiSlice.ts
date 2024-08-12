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

export const userApi:any = createApi({
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
    getUser: builder.query<any, void>({
      query: (userId) => ({
        url: `/users/${userId}`,
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
        url: `/resume/create/template`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useGetTemplatesQuery,
  useCreateTemplatesMutation,
} = userApi;

// getUsers: builder.query<User[], void>({
//   query: () => "users",
// }),
// addUser: builder.mutation<User, Partial<User>>({
//   query: (newUser) => ({
//     url: "users",
//     method: "POST",
//     body: newUser,
//   }),
// }),
// updateUser: builder.mutation<User, { id: string; user: Partial<User> }>({
//   query: ({ id, ...updatedUser }) => ({
//     url: `users/${id}`,
//     method: "PUT",
//     body: updatedUser,
//   }),
// }),
// deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
//   query: (id) => ({
//     url: `users/${id}`,
//     method: "DELETE",
//   }),
// }),

// useGetUsersQuery,
// useAddUserMutation,
// useUpdateUserMutation,
// useDeleteUserMutation,
