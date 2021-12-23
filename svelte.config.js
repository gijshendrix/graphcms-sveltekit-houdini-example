import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import houdini from 'houdini-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [houdini(), preprocess()],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
					alias: {
							$houdini: path.resolve('.', '$houdini')
					}
			},
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['..'],
        },
      },			
		}		
	}
};

export default config;
