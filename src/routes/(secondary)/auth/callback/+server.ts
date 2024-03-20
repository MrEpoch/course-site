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

	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}

	const session = await supabase.auth.getSession();

	if (!session.data.session) {
		throw redirect(303, '/signin');
  }

  const user = await prisma.user.findUnique({
    where: {
      supabaseUserId: session.data.session?.user.id
    }
  })

  if (!user) {
    await prisma.user.create({
      data: {
        supabaseUserId: session.data.session?.user.id
      }
    });
  }

	throw redirect(303, '/dashboard/account');
}
