import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

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
		}),
		uglify()
	],
	targets: [
		{ dest: 'dist/video.rollup.js', format: 'umd' },
		// { dest: 'dist/video.rollup.es.js', format: 'es' }
	]
};