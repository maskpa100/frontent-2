"use client";
import { PostType, useGetPostsQuery } from "@/redux/rtkQuery";
import s from "./Home.module.scss";
import Loading from "../Loading/loading";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();

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
    </>
  );
}
