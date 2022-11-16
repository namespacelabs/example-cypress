server: {
	name: "WebFrontend"

	integration: web: {
		service: "webservice"

		// When adding a reference to the API server to the `backends` block, Namespace will
		// 1) add the API server to the deployed stack
		// 2) inject the configuration of API server (e.g. endpoint) into a src/config/backends.ns.js file that is accessible to the browser
		backends: {
			"api": "namespacelabs.dev/example-cypress/api:apiservice"
		}
	}

	services: webservice: {
		// Default Vite port
		port: 5173
		kind: "http"

		ingress: internetFacing: true
	}
}