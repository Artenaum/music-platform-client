const register = require('ignore-styles').default

function globalSetup(config) {
	register(['.sass', '.scss', '.css', '.module.scss', '.module.css']);
}

module.exports = globalSetup