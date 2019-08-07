module.exports = {
	solo: true,
	description: 're-exports a named external export as default via another file',
	options: {
		output: { name: 'bundle' },
		external: ['external']
	}
};
