
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";

export const aiApi: any = createApi({
  reducerPath: "apApI",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    generateSumaryWithAi: builder.mutation<any, {promt:string}>({
      query: (credentials) => ({
        url: `/ai/summary`,
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
  useGenerateSumaryWithAiMutation
} = aiApi;