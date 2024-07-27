import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

interface LoginRequest {
  email: string;
  password: string;
}


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query<any, void>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "GET",
        headers:{
          authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }),
    }),
  }),
});

export const { useLoginMutation ,useGetUserQuery } = userApi;

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
