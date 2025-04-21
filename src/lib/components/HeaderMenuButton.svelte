<script lang="ts">
	let { text, isActive, route }: { text: string; isActive: boolean; route: string } = $props();
</script>

<a href={route} class={['link', { active: isActive, inactive: !isActive }]}>
	{text}
</a>

<style>
	.link {
    padding: 8px;
		font-size: 20px;
		font-weight: 500;
		width: 156px;
		display: inline-block;
		text-decoration: none;
	}

	.active {
		background-color: var(--header-menu-button-active-bg);
		color: var(--font-color);
		height: 60px;
	}

	.inactive {
		background-color: var(--header-menu-button-inactive-bg);
		color: var(--font-inactive-color);
		height: 44px;
	}
</style>
