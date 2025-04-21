<script lang="ts">
	import { routes } from '$lib/routes';
	import HeaderMenuButton from './HeaderMenuButton.svelte';

	const { route }: { route: (typeof routes)[keyof typeof routes] } = $props();
</script>

<div class="container">
	<div class="inner-container">
		<HeaderMenuButton isActive={route === routes.home} text="Home" route={routes.home} />
		<HeaderMenuButton isActive={route === routes.blog} text="Blog" route={routes.blog} />
		<HeaderMenuButton isActive={route === routes.aboutme} text="About Me" route={routes.aboutme} />
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		justify-content: center;
		padding-top: 20px;
		border-bottom: 2px solid var(--header-menu-button-active-bg);
	}
	.inner-container {
		display: flex;
		gap: 8px;
	}
</style>
