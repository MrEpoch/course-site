import type { Session, SupabaseClient } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';

export async function GET({
	locals: { getSession, supabase }
}: {
	locals: { getSession: () => Promise<Session>; supabase: SupabaseClient };
}) {
	const session = await getSession();
	if (!session) {
    throw redirect(303, '/signin');
	}
	await supabase.auth.signOut();
  throw redirect(303, '/');
}
