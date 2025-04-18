<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<a href="/">Home</a>
<h1>{data.attributes['title']}</h1>

<article>
	{@html data.content}
</article>

<style>
	article :global {
	}
</style>
