module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}]
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy'
	},
	testPathIgnorePatterns: [
		'/node_modules/',
		'\\.spec\\.(js|ts|jsx|tsx)$'
	],
}