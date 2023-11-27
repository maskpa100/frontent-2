"use client";
import { useGetCommentsQuery, useGetPostQuery } from "@/redux/rtkQuery";
import s from "./Components.module.scss";
export default function Comments({ postId }: { postId: number }) {
  const comment = useGetCommentsQuery(postId);
  const post = useGetPostQuery(postId);
  console.log(post.data);

  return (
    <>
      <div className={s.content}>
        <div className={s.post}>
          <div className={s.title}>{post.data?.title}</div>
          <div className={s.body}>{post.data?.body}</div>
        </div>
        <div className={s.comments}>
          {comment.data !== undefined &&
            comment.data.map((item: any, index: number) => (
              <div className={s.item} key={index}>
                <div className={s.name}>{item.name}</div>
                <div className={s.email}>{item.email}</div>
                <div className={s.body}>{item.body}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
