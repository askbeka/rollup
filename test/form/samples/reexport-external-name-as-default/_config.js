module.exports = {
	solo: true,
	description: 're-exports a named external export as default',
	options: {
		output: { name: 'bundle' },
		external: ['external']
	}
};
