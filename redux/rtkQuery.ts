import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type CommentsType = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => {
        return {
          url: "posts",
          method: "GET",
        };
      },
    }),
    getComments: builder.query<CommentsType[], number>({
      query: (post) => {
        return {
          url: `posts/${post}/comments`,
          method: "GET",
        };
      },
    }),
    getPost: builder.query<PostType, number>({
      query: (post) => {
        return {
          url: `posts/${post}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetPostsQuery, useGetCommentsQuery, useGetPostQuery } = api;
