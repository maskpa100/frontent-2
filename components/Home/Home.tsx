"use client";
import { useEffect, useState } from "react";
import {
  PostType,
  useGetPostsQuery,
  useGetSearchQuery,
} from "@/redux/ApiQuery";
import s from "./Home.module.scss";
import Loading from "../Loading/loading";
import Paginator from "../Paginator/Paginator";
import Search from "../Search/Search";
import { BaseQueryFn, QueryDefinition } from "@reduxjs/toolkit/query";
import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export default function Home() {
  let posts: any;
  let totalPage = 4;
  const [totalPosts, setTotalPosts] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("c");
  const [onSearch, setOnSearch] = useState(false);
  const [answeCame, setAnsweCame] = useState(false);

  if (onSearch === false) {
    posts = useGetPostsQuery({ page: currentPage, limit: totalPage });
  } else {
    posts = useGetSearchQuery(search);
  }

  if (posts.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        setOnSearch={setOnSearch}
      />
      <div className={s.content}>
        {posts.data !== undefined &&
          posts.data.map((item: PostType, index: number) => (
            <div className={s.item} key={index}>
              <div className={s.title}>{item.title}</div>
              <div className={s.body}>{item.body}</div>
              <a className={s.comments} href={`/comments/${item.id}`}>
                Читать комментарии...
              </a>
            </div>
          ))}
        {onSearch ? (
          ""
        ) : (
          <Paginator
            totalPosts={totalPosts}
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}
