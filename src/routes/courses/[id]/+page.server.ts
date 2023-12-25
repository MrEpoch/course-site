import { fail, redirect } from "@sveltejs/kit";
import { prisma } from "lib/db";
import { client } from "lib/sanity";

export const actions = {
  default: async ({ request, locals: { getSession } }) => {
    const data = await request.formData();
    const courseId = String(data.get('courseId'));
    const session = await getSession();

    if (!session) throw redirect(302, '/signin');

    try {  
      const data = await client.fetch(`*[_type == "course" && _id == $courseId][0]`, { courseId });
      if (!data) {
        return fail(400, {
          error: "Invalid course Id"
        })
      }
      
      await prisma.user.update({
        where: {
          supabaseUserId: session.user.id
        },
        data: {
          courses: {
            push: courseId
          }
        }
      })
    } catch (error) {
        return fail(400, {
          error: "Internal server error"
        })
    }

    throw redirect(302, '/dashboard/account');
  }
}
