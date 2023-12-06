import { redirect } from '@sveltejs/kit';
import { courses } from '../courses';

export const load = async ({ params }) => {
	if (courses.includes(params.id)) {
		return {
			course: params.id
		};
	} else throw redirect(302, '/courses');
};
