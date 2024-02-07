import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import staticIPFSAdapter from 'sveltejs-adapter-ipfs';
import adapter_static from '@sveltejs/adapter-static';
import slug from 'remark-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md', '.svelte.md'],
			layout: {
				standard: 'src/layouts/standard.svelte'
			},
			remarkPlugins: [slug]
		}),
		preprocess({
			scss: {
				// prependData: "@import 'src/lib/styles/variables.scss';"
			}
			// preserve: ['module'] // https://github.com/sveltejs/svelte-preprocess/issues/261
		})
	],
	kit: {
		adapter: adapter()
		// adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html

		// adapter: staticIPFSAdapter({
		// 	removeBuiltInServiceWorkerRegistration: true,
		// 	injectPagesInServiceWorker: true
		// })
		// adapter: adapter_static(),
	}
};

export default config;
