<script lang="ts">
	import HeaderMenu from '../components/HeaderMenu.svelte';

	let { children } = $props();
</script>

<HeaderMenu route="blog" />
{@render children()}
