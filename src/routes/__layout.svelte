<script lang="ts">
	import Discord from '$lib/graphics/discord.svelte';
	import Medium from '$lib/graphics/medium.svelte';
	import Twitter from '$lib/graphics/twitter.svelte';
	import Header from '$lib/header/Header.svelte';
	import WalletConnector from '$lib/WalletConnector.svelte';

	import '../app.css';

	// TODO: Make a svelte store?
	let wallet; // use this in the apps to access wallet features, like wallet.ed25519.sign(someData)
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<WalletConnector bind:wallet />

<Header />

<main>
	<slot />
</main>

<footer>
	<span>Join the community</span>
	<div>
		<div class="icons">
			<a href="https://github.com/peerpiper/" target="_blank" rel="noopener noreferrer"
				><i class="fa fa-github fa-2x" aria-hidden="true" /></a
			><a href="https://discord.gg/pxK3rApf" target="_blank" rel="noopener noreferrer">
				<Discord />
			</a>
			<a href="https://twitter.com/DougAnderson444" target="_blank">
				<Twitter />
			</a>
			<a href="https://medium.com/peerpiper/" target="_blank" rel="noopener noreferrer">
				<Medium /></a
			>
		</div>
	</div>
</footer>

<style>
	.icons {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}
	footer a {
		flex-direction: row;
		margin: 0.25em 0.5em;
		padding: 0.5em auto;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
