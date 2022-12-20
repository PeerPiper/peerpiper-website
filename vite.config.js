import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {}
	},
	define: {},
	build: {},
	optimization: {},
	optimizeDeps: {}
};

export default config;
