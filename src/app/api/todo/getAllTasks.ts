import axios from "axios";

export async function requestForGetAllTasks() {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_URL_OF_MY_API}/todo/findAll`,
    });
    return data;
  } catch (err) {
    console.error("fail in get all");
  }
}
