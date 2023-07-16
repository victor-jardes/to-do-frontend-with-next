import { ITodo } from "@/types/ITodo";
import axios from "axios";

export async function requestForCreateTask({
  id,
  description,
}: Omit<ITodo, "isFinished">) {
  try {
    const { data, statusText } = await axios<ITodo>({
      url: `${process.env.NEXT_PUBLIC_URL_OF_MY_API}/todo/create`,
      method: "POST",
      data: {
        id,
        description,
      },
    });

    if (statusText) {
      return data;
    }
  } catch {
    console.error("error in created task");
  }
}
