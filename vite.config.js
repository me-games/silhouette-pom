import { defineConfig } from 'vite';

// Genex port glue: the upstream repo has no bundler — it maps the bare
// specifier `three` to the WebGPU build via an importmap in index.html.
// The alias below reproduces that mapping exactly so the three.js addons
// (OrbitControls, Inspector, BloomNode) share the author's WebGPU build.
export default defineConfig( {
	base: './',
	resolve: {
		alias: [
			{ find: /^three$/, replacement: 'three/webgpu' }
		]
	}
} );
