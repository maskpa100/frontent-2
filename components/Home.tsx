"use client";
import { useGetPostsQuery } from "@/redux/rtkQuery";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  return <>{data.title}</>;
}
