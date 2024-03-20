import { redirect } from '@sveltejs/kit';
import { prisma } from 'lib/db';
import { client } from 'lib/sanity';

export const load = async ({ locals: { getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/signin');
	}

	const prismaUser = await prisma.user.findUnique({
		where: {
			supabaseUserId: session.user.id
		}
	});

	if (!prismaUser) {
		throw redirect(303, '/signin');
	}

	let courses;
	if (prismaUser.courses.length > 0) {
		const course = await client.fetch(`*[_type == "course"]`);
		courses = course.filter((course) => prismaUser.courses.includes(course._id));
	}

	return {
		courses,
		username: session.user.email.split('@')[0]
	};
};
