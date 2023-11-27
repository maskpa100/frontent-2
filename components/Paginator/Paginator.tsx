import { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./Paginator.module.scss";
type PropsType = {
  totalPosts: number;
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
export default function Paginator(props: PropsType) {
  const { totalPosts, totalPage, currentPage, setCurrentPage } = props;

  let arr: number[] = [currentPage];

  let sumPage = Math.ceil(totalPosts / totalPage);

  for (let i = 1; i < 3; i++) {
    if (1 <= currentPage - i) {
      arr.unshift(currentPage - i);
    }
    if (sumPage >= currentPage + i) {
      arr.push(currentPage + i);
    }
  }

  return (
    <div className={s.paginator}>
      {2 < currentPage && (
        <button
          onClick={() => {
            setCurrentPage(1);
          }}
          className={s.item}>
          {"<<"}
        </button>
      )}
      {1 < currentPage && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          className={s.item}>
          {"<"}
        </button>
      )}
      {arr.map((item, index: number) => (
        <button
          onClick={() => {
            setCurrentPage(item);
          }}
          className={item == currentPage ? s.itemActiv : s.item}
          key={index}>
          {item}
        </button>
      ))}
      {currentPage < sumPage - 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          className={s.item}>
          {">"}
        </button>
      )}
      {currentPage < sumPage - 2 && (
        <button
          onClick={() => {
            setCurrentPage(sumPage);
          }}
          className={s.item}>
          {">>"}
        </button>
      )}
    </div>
  );
}
