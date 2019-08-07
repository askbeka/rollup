module.exports = {
	solo: true,
	description: 're-exports a named export from an external module',
	options: {
		external: ['external1', 'external2'],
		output: { name: 'myBundle' }
	}
};
