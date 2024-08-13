import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";

interface ICreateCategory {
  name: string;
}

interface IGetCategories {
  data: ICreateCategory[];
}

export const categoryApi:any = createApi({
  reducerPath: "categoryApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    getCategories: builder.query<IGetCategories, void>({
      query: () => ({
        url: "/template-category",
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    createCategories: builder.mutation<void, ICreateCategory>({
      query: (credentials) => ({
        url: "/template-category",
        body: credentials,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoriesMutation } =
  categoryApi;
