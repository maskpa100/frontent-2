import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Укажите свой базовый URL
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => {
        return {
          url: "https://jsonplaceholder.typicode.com/posts",
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetPostsQuery } = api;
