"use client";
import { useEffect, useState } from "react";
import { PostType, useGetPostsQuery } from "@/redux/ApiQuery";
import s from "./Home.module.scss";
import Loading from "../Loading/loading";
import Paginator from "../Paginator/Paginator";

export default function Home() {
  let totalPosts = 100;
  let totalPage = 4;
  const [currentPage, setCurrentPage] = useState(8); //Текущая страница
  const { data, error, isLoading } = useGetPostsQuery({
    page: currentPage,
    limit: totalPage,
  });
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      console.log(i);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={s.content}>
        {data !== undefined &&
          data.map((item: PostType, index: number) => (
            <div className={s.item} key={index}>
              <div className={s.title}>{item.title}</div>
              <div className={s.body}>{item.body}</div>
              <a className={s.comments} href={`/comments/${item.id}`}>
                Читать комментарии...
              </a>
            </div>
          ))}
      </div>
      <Paginator
        totalPosts={totalPosts}
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
