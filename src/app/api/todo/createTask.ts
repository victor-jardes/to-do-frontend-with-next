import { ITodo } from "@/types/ITodo";

export async function requestForCreateTask({
  id,
  description,
}: Omit<ITodo, "isFinished">) {
  try {
    const res = await fetch("http://localhost:3001/todo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, description }),
    });

    if (res.ok) {
      const newTask = await res.json();
      return newTask;
    } else {
      console.error("erro with created task", res.status);
    }
  } catch (err) {
    console.error(err);
  }
}
