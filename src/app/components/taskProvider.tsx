"use client";
import { TaskContext } from "./taskContext";

import { useState } from "react";

export default function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [taskValue, setTaskValue] = useState("");
  const values = {
    taskValue,
    setTaskValue,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
}
