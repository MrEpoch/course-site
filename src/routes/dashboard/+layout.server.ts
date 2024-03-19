import { redirect } from "@sveltejs/kit";
import { prisma } from "lib/db";

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
}
