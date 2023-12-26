import { client } from "$lib/sanity";

export async function load({ params, url }) {

  const data = await client.fetch(`*[_type == "course"]`);
  const query = url.searchParams.get('category');

  if (data) {
    if (query && query !== 'all') {
      return {
        courses: data.filter((course) => course.tag.toLowerCase() === query.toLowerCase())
      }
    } else {
      return {
        courses: data
      }
    }
  }

  return {
    status: 500,
    body: new Error("Internal server error")
  }
}
