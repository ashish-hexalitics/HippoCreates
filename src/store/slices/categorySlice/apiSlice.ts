import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";

interface ICreateCategory {
  name: string;
}

interface IGetCategories {
  data: ICreateCategory[];
}

const token:string | null = localStorage.getItem("access_token")

export const categoryApi:any = createApi({
  reducerPath: "categoryApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    getCategories: builder.query<IGetCategories, void>({
      query: () => ({
        url: "/template-category",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    createCategories: builder.mutation<any, ICreateCategory>({
      query: (credentials) => ({
        url: "/template-category",
        body: credentials,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoriesMutation } =
  categoryApi;
