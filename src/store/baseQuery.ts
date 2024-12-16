import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "./slices/userSlice/userSlice"; 

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    // baseUrl: "http://ec2-16-170-243-143.eu-north-1.compute.amazonaws.com:3000/api",
  })(args, api, extraOptions);

  // Check for 403 status
  if (result.error && result.error.status === 403) {
    api.dispatch(logout());
    // window.reload();
    return {
      error: {
        status: 403,
        data: "You have been logged out due to a 403 response",
      },
    };
  }

  return result;
};

export { baseQueryWithInterceptor };
