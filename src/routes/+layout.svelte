<script lang="ts">
	import { page } from '$app/state';
	import HeaderMenu from '$lib/components/HeaderMenu.svelte';
	import { routes, type Routes } from '$lib/routes';

	let { children } = $props();

	const firstPath = $derived.by(() => {
		const regexp = /\/[a-zA-Z]*/;
		const found = page.url.pathname.match(regexp);
		const firstPath = found ? (found[0] as Routes) : routes.home;
    return firstPath
	});
</script>

<HeaderMenu route={firstPath} />
{@render children()}
