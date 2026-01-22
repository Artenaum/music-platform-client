/** @type {import('next').NextConfig} */
module.exports = {
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@emotion/core': require.resolve('@emotion/react'),
			'graphql': require.resolve('graphql/index.js')
		}
		return config
	}
}