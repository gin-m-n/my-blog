import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log('debug');
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: '# Marked in the browser\n\nRendered by **marked**.'
		};
	}

	error(404, 'Not found');
};
