export type Routes = (typeof routes)[keyof typeof routes];

export const routes = {
	home: '/',
	blog: '/blog',
	aboutme: '/aboutme'
} as const;
