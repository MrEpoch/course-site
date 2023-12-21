import { client } from "$lib/sanity";

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "course"]`);

  if (data) {
    return {
      courses: data
    }
  }

  return {
    status: 500,
    body: new Error("Internal server error")
  }
}
