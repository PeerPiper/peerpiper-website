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

<div class="justify-center text-center align-middle items-center">
	<PGraphic />
	<h1 class="title">Your Decentralized Directory.</h1>
	<h2 class="title">The easiest way to stay in touch, effectively forever.</h2>
</div>
<section>
	<PeerStream />
	<p class="description">Find contacts and be found, even if your details change.</p>
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
