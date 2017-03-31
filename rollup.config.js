import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/js/video.js',
	moduleName: 'videojs',
	plugins: [
		resolve(),
		json(),
		commonjs(),
		buble({
			transforms: {
				dangerousTaggedTemplateString: true
			}
		})
	],
	targets: [
		{ dest: 'dist/video.rollup.js', format: 'umd' },
		{ dest: 'dist/video.rollup.es.js', format: 'es' }
	]
};