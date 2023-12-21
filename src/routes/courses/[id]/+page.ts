import { client } from "$lib/sanity";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const slug = params.id;
  const data = await client.fetch(`*[_type == "course" && slug.current == $slug][0]`, { slug });

  if (data) {
    return {
      course: data
    }
  }

  throw redirect(302, '/courses');
}
