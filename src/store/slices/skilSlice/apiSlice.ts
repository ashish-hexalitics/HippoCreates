import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../../baseQuery";
import { ISkill } from "../../../dto/skill.dto";

export const skillApi: any = createApi({
  reducerPath: "skillApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: (builder) => ({
    getAllSkills: builder.query<any, void>({
      query: () => ({
        url: `/skills`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    updateSkill: builder.mutation<any, any>({
      query: (credentials) => ({
        url: `/skills/${credentials.skillId}`,
        method: "PUT",
        body: credentials,
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
    createSkill: builder.mutation<any, ISkill>({
      query: (credentials) => ({
        url: `/skills`,
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
  useGetAllSkillsQuery,
  useUpdateSkillMutation,
  useCreateSkillMutation
} = skillApi;
