const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
	`npx prettier --write --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*.{js,jsx,ts,tsx,html,css,json,md}': [buildPrettierCommand]
};
