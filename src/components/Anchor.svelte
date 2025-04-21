<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = { children: Snippet } & SvelteHTMLElements['a'];
	let { children, ...restProps }: Props = $props();
</script>

<a {...restProps}>
	{@render children()}
</a>

<style>
	a {
		text-decoration: none;
		color: var(--font-color);
	}
</style>
