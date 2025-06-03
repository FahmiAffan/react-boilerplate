import { useParams } from "react-router";

async function fetchData() {
  try {
    const res = await fetch("http://localhost:4000/v1/users");
    return res;
  } catch (e) {
    console.error("Error fetching data:", e);
  }
}

export function UsersPage() {
  const params = useParams();

  fetchData().then((res) => {
    console.log("Fetched data:", res);
  });

  console.log("User ID:", params.id);

  return (
    <div>
      <h1>Users Page</h1>
      <p>This is the users page.</p>
    </div>
  );
}
