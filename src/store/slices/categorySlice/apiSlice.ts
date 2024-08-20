import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";

interface ICategory {
  name: string;
  _id?: string;
}

interface IGetCategories {
  data: ICategory[];
}

const baseRoute: string = "/template-category";

export const categoryApi: any = createApi({
  reducerPath: "categoryApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    getCategories: builder.query<IGetCategories, void>({
      query: () => ({
        url: baseRoute,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    createCategories: builder.mutation<void, ICategory>({
      query: (credentials) => ({
        url: baseRoute,
        body: credentials,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateCategoryApi: builder.mutation<void, ICategory>({
      query: (credentials) => ({
        url: `${baseRoute}/${credentials._id}`,
        body: credentials,
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    deleteCategoryApi: builder.mutation<void, string>({
      query: (id) => ({
        url: `${baseRoute}/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    cloneCategoryApi: builder.mutation<void, string>({
      query: (id) => ({
        url: `${baseRoute}/clone/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoriesMutation,
  useUpdateCategoryApiMutation,
  useDeleteCategoryApiMutation,
  useCloneCategoryApiMutation,
} = categoryApi;
