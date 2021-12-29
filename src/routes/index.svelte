<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PGraphic from '$lib/graphics/p.svelte';
	import PeerStream from '$lib/graphics/PeerStream.svelte';
</script>

<svelte:head>
	<title>PeerPiper.io</title>
</svelte:head>

<div class="hero">
	<PGraphic />
	<h1 class="title">The easiest way to automatically stay in touch.</h1>
</div>
<section>
	<PeerStream />
	<p class="description">
		Save anything once, pipe updates to your peers from the privacy of your own devices.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		font-weight: bold;
	}

	.hero {
		margin: 30px 0px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		color: #525252;
		width: 100%;
		text-align: center;
	}
</style>
