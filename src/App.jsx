import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "./components/Sidebar";
import AppContext from "./contexts/App";

function App() {
	const [user, setUser] = useState();

	useEffect(() => {
		function handleContextMenu(e) {
			e.preventDefault();
		}

		document.addEventListener("contextmenu", handleContextMenu);

		return () => {
			document.removeEventListener("contextmenu", handleContextMenu);
		};
	}, []);

	return (
		<AppContext.Provider value={{ user, setUser }}>
			<div className="flex flex-row relative justify-between w-full h-screen bg-[#F3F3F3] overflow-hidden">
				<Sidebar />

				<div className="w-full h-full m-2 overflow-x-auto">
					<div className="w-full h-full"><Outlet /></div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
