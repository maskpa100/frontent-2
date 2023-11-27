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
type ParamPostsType = {
  page: number;
  limit: number;
};
type SearchType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], ParamPostsType>({
      query: ({ page, limit }) => {
        return {
          url: `posts?_page=${page}&_limit=${limit}`,
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
    getSearch: builder.query<SearchType[], string>({
      query: (search) => {
        return {
          url: `posts?title_like=${search}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetPostQuery,
  useGetSearchQuery,
} = api;
