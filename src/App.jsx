import "./App.css";

import { useEffect } from "react";

import Sidebar from "./components/Sidebar";

function App() {
	useEffect(() => {
		document.title = "CAMZN";
	}, []);
	
	return (
		<div className="Container">
			<Sidebar />
		</div>
	);
}

export default App;
