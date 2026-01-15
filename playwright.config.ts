import { defineConfig } from "@playwright/test"

export default defineConfig({
	globalSetup: require.resolve('./playwright-setup.js'),
	testDir: './tests',
	testMatch: /.*\.spec\.(js|ts|mjs)$/,
})