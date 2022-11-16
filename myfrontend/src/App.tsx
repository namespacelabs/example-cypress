import "./App.css";
import logo from "./assets/logo.svg";

function App() {
	return (
		<div className="app">
			<img src={logo} className="logo" alt="Logo" />
			<span className="block">Welcome to Namespace.</span>
		</div>
	);
}

export default App;
