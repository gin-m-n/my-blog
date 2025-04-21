<script lang="ts">
	import Anchor from './Anchor.svelte';

	let { text, isActive, route }: { text: string; isActive: boolean; route: string } = $props();
</script>

<div class={['wrapper', { active: isActive, inactive: !isActive }]}>
	<Anchor href={route}>
		{text}
	</Anchor>
</div>

<style>
	.wrapper {
		padding: 8px;
		font-size: 20px;
		font-weight: 500;
		width: 156px;
	}

	.active {
		background-color: var(--header-menu-button-active-bg);
		height: 60px;
	}

	.inactive {
		background-color: var(--header-menu-button-inactive-bg);
		height: 44px;

		:global(a) {
			color: var(--font-inactive-color);
		}
	}
</style>
