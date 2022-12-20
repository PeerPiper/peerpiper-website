<script lang="ts">
	import Home from '$lib/Home.svelte';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let dynamicComponent = Home;

	// TODO: Wallet subdomain
	// if ($page.url.hostname.startsWith('wallet.')) dynamicComponent = Wallet;

	onMount(() => {});
</script>

<svelte:component this={dynamicComponent} />
