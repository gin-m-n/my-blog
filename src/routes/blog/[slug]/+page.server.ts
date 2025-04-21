import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { marked, Renderer } from 'marked';
import matter from 'gray-matter';

const toc: { anchor: string; level: number; text: string }[] = [];

const renderer = new Renderer();
renderer.heading = function ({ tokens, depth }) {
	const text = this.parser.parseInline(tokens);
	const escapedText = text.toLowerCase().replace(/[\s]+/g, '-');

	toc.push({
		anchor: escapedText,
		level: depth,
		text: text
	});

	return `<h${depth}>
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              ${text}
            </a>
          </h${depth}>`;
};

marked.use({
	renderer: renderer
});

export const load: PageServerLoad = async ({ params }) => {
	try {
		const { default: raw } = await import(`@articles/${params.slug}.md?raw`);
		const { content, data: attributes } = matter(raw);

		const md = await marked.parse(content);

		return {
			attributes: attributes,
			content: md,
			toc: toc
		};
	} catch {
		error(404, { message: 'Not Found' });
	}
};
