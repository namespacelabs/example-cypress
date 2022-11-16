server: {
	name: "ApiBackend"

	integration: "nodejs"

	services: {
		apiservice: {
			port: 4000
			kind: "http"

			ingress: internetFacing: true
		}
	}
}
