import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import markdownit from 'markdown-it';
import markdownitAnchor from 'markdown-it-anchor';

const customMarkdownit = markdownit({
	html: true,
	linkify: true,
	typographer: true
}).use(markdownitAnchor, {
	permalink: markdownitAnchor.permalink
});

export default defineConfig({
	plugins: [
		sveltekit(),
		mdPlugin({
			mode: [Mode.TOC, Mode.HTML],
			markdownIt: customMarkdownit
		})
	],
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
