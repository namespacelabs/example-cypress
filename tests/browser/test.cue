tests: {
	cypress: {
		integration: "dockerfile"
		env: {
			// Injecting the address of the server under test as an environment variable.
			CYPRESS_ROOT_HOST: fromServiceEndpoint: "namespacelabs.dev/example-cypress/myserver:webapi"
		}
		// Starting our server before the test is run.
		serversUnderTest: [ "namespacelabs.dev/example-cypress/myserver"]
	}
}