server: {
	name: "myfrontend"

	integration: web: service: "web"

	services: web: {
		// Default Vite port
		port: 5173
		kind: "http"

		ingress: internetFacing: true
	}
}
