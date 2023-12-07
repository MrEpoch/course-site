import { redirect } from '@sveltejs/kit';
import { courses } from '../courses';

export const load = async ({ params }: { params: { id: string } }) => {
  const course = courses.filter(a => a.url === ("/" + String(params.id)))
  if (course.length === 1) {
		return {
      course: course[0]
		};
	} else throw redirect(302, '/courses');
};
