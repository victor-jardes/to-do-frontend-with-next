/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useGetContextForList } from "./utils/useGetContextForList";

export function IndiceOfPages() {
  const { todos } = useGetContextForList();

  const [numberOfPages, setNumberOfPages] = useState<number[]>([1]);
  const [baseNumber] = useState<number>(5);
  const [multipleAndNumberInIndex, setMultipleAndNumberInIndex] =
    useState<number>(1);

  useEffect(() => {
    if (!numberOfPages.includes(multipleAndNumberInIndex)) {
      setNumberOfPages((prevPages) => [...prevPages, multipleAndNumberInIndex]);
    }
  }, [multipleAndNumberInIndex]);

  useEffect(() => {
    if (baseNumber * multipleAndNumberInIndex <= todos.length) {
      setMultipleAndNumberInIndex((prev) => prev + 1);
    }
  }, [todos]);

  return (
    <>
      <span>
        <a href="#">&lt;</a>
        {numberOfPages.map((item) => (
          <a href="#" key={item}>
            {item}
          </a>
        ))}
        <a href="#">&gt;</a>
      </span>
    </>
  );
}
