<script lang="ts">
	import HeaderMenu from '$lib/components/HeaderMenu.svelte';

	let { children } = $props();
</script>

<HeaderMenu route="blog" />
{@render children()}
