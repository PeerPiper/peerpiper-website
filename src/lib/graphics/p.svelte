<script>
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<div class="flex items-center justify-center h-20 w-20 bg-red-500 rounded-full">
	{#if visible}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 700 700"
		>
			<defs />
			<defs>
				<path
					id="a"
					d="M106 584c4-134 3-405 0-526 23-72 471-124 472 145 0 270-269 242-305 239v186c-97 25-152 10-167-44z"
				/>
				<path
					id="c"
					d="M483 244c-47 97-124 127-231 91l-16 34h-3l-42-125c-1-3 0-5 2-6l119-46c1-1 3 1 2 2l-16 33c31 55 92 60 185 17z"
				/>
				<path
					id="d"
					d="M190 195c47-97 124-128 231-91a238866 238866 0 0119-34l42 125c1 2 0 4-2 5l-119 47c-1 0-3-1-2-3l16-33c-31-54-92-60-185-16z"
				/>
				<radialGradient id="b" cx="426" cy="77.1" r="579" gradientUnits="userSpaceOnUse">
					<stop offset="0%" stop-color="#69ed66" />
					<stop offset="100%" stop-color="#279c19" />
				</radialGradient>
			</defs>
			<use fill="url(#b)" xlink:href="#a" />
			<use fill="#fff" xlink:href="#c" />
			<use fill="#fff" xlink:href="#d" />
		</svg>
	{/if}
</div>

<style>
	div,
	svg {
		width: auto;
		height: 150px;
	}
</style>
