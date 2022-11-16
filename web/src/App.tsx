import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { Backends } from "./config/backends.ns";

function App() {
	return (
		<div className="app">
			<img src={logo} className="logo" alt="Logo" />
			<span className="welcome">Welcome to Namespace.</span>
			<BackendResponse />
		</div>
	);
}

function BackendResponse() {
	const [response, setResponse] = useState("Loading...");

	useEffect(() => {
		fetch(`${Backends.api.managed}/echo`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: "Bob" }),
		})
			.then((response) => response.text())
			.then((text) => setResponse(text));
	}, []);
	return (
		<div className="server-response-block">
			<span>Response from the API server:</span>
			<span className="server-response">{response}</span>
		</div>
	);
}

export default App;
