export async function requestForGetAllTasks() {
  const res = await fetch("http://localhost:3001/todo/findAll", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }
  return res.json();
}
