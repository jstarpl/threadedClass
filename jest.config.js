module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
			diagnostics: {
				ignoreCodes: ['TS2571']
			}
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/__tests__/**/*.spec.(ts|js)'
	],
	testPathIgnorePatterns: [
		'integrationTests'
	],
	coveragePathIgnorePatterns: [
        "src/webWorkers.ts"
    ],
	testEnvironment: 'node',
	coverageThreshold: {
		global: {
			statements: 60,
			branches: 50,
			functions: 60,
			lines: 60,
		}
	},
	coverageDirectory: "./coverage/",
	collectCoverageFrom: [
		"**/src/**/*.{ts,js}",
		"!**/src/**/*.d.ts",
		"!**/node_modules/**",
		"!**/__tests__/**",
		"!**/__mocks__/**",
		"!**/dist/**"
	],
	collectCoverage: true
}
