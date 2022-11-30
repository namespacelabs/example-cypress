tests: {
	mycypresstest: {
		integration: "dockerfile"
		env: {
			// Injecting the address of the server under test as an environment variable.
			// CYPRESS_XYZ environment variables can be accessed with Cypress.env("XYZ") from the test.
			CYPRESS_ROOT_HOST: fromServiceEndpoint: "namespacelabs.dev/example-cypress/web:web-frontend"
		}
		// Starting our server before the test is run.
		serversUnderTest: [ "namespacelabs.dev/example-cypress/web"]
	}
}
