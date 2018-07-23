import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-minify-es';

function bookmarklet() {
	return {
		transform(code, id) {
			return {
				code: 'javascript:' + code,
				map: { mappings: '' }
			};
		}
	};
}

export default [
	{
		input: 'src/index.js',
		plugins: [
			eslint(),
			babel()
		],
		output: {
			format: 'iife',
			name: 'sitemap_to_xml',
			file: 'build/bookmarklet.js'
		}
	},
	{
		input: 'src/index.js',
		plugins: [
			babel(),
			minify()
		],
		output: {
			format: 'iife',
			name: 'sitemap_to_xml',
			file: 'build/bookmarklet.min.js'
		}
	}
];
