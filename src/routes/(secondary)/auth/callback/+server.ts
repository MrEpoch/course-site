import type { SupabaseClient } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import { prisma } from 'lib/db';

export const GET = async ({
	url,
	locals: { supabase }
}: {
	url: URL;
	locals: { supabase: SupabaseClient };
}) => {
	const code = url.searchParams.get('code');
  console.log(code);

	if (code) {
    console.log("bef");
		await supabase.auth.exchangeCodeForSession(code);
    console.log("af");
	}

	const session = await supabase.auth.getSession();
  console.log(session);

	if (!session.data.session) {
		throw redirect(303, '/signin');
	}
	await prisma.user.create({
		data: {
			supabaseUserId: session.data.session?.user.id
		}
	});

	throw redirect(303, '/dashboard/account');
};
