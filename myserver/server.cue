server: {
	name: "myserver"

	integration: "nodejs"

	services: {
		webapi: {
			port: 4000
			kind: "http"

			ingress: internetFacing: true
		}
	}
}
