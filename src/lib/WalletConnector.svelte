<script>
	import { onMount } from 'svelte';

	// This portal variable gets bound to the Wallet portal
	// Then you can do things like
	// const signature = await wallet.ed25519.sign(data)
	export let wallet; // the variable you interact with the wallet functions

	let Web3WalletMenu; // the Component variable
	let inputUrl = 'https://peerpiper.github.io/iframe-wallet-sveltekit'; // the default URL, can be your own or the user's own URL

	onMount(async () => {
		({ Web3WalletMenu } = await import('@peerpiper/web3-wallet-connector'));
	});
</script>

{#if Web3WalletMenu}
	<Web3WalletMenu bind:wallet {inputUrl} />
{/if}
