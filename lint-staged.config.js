/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	"*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
		"biome check --write --unsafe --no-errors-on-unmatched", // Format, sort imports, lints, apply safe/unsafe fixes
	],
};
