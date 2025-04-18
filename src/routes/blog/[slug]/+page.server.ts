import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const { toc, html, attributes } = await import(`@articles/${params.slug}.md`);
    console.log(toc);
		return {
			attributes: attributes as Record<string, unknown>,
			content: html as string,
			toc: toc as { level: string; content: string }[]
		};
	} catch {
		error(404, { message: 'Not Found' });
	}
};
