<script lang="ts">
	import { marked } from 'marked';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<a href="/">Home</a>
<h1>{data.title}</h1>
<article>
	{@html marked.parse(data.content ?? '')}
</article>

<style>
	article :global {
		h1 {
			color: red;
		}
	}
</style>
