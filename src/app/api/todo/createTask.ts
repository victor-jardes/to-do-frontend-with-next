import { ITodo } from "@/types/ITodo";
import axios from "axios";

const API_URL = "http://localhost:3001";

export async function requestForCreateTask({
  id,
  description,
}: Omit<ITodo, "isFinished">) {
  try {
    const { data, statusText } = await axios<ITodo>({
      url: `${API_URL}/todo/create`,
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
