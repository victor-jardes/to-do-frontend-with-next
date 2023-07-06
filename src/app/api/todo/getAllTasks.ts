import axios from "axios";

// const API_URL = process.env.MY_API_URL;
const API_URL = "http://localhost:3001";

export async function requestForGetAllTasks() {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${API_URL}/todo/findAll`,
    });
    return data;
  } catch (err) {
    console.error("fail in get all");
  }
}
