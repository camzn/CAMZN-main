import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "./components/Sidebar";
import AppContext from "./contexts/App";
import { getUser } from "./utils/api";

function App() {
	const [isDarkMode, setDarkMode] = useState(true);
	const [user, setUser] = useState(getUser());

	useEffect(() => {
		function handleContextMenu(e) {
			e.preventDefault();
		}

		document.addEventListener("contextmenu", handleContextMenu);

		return () => {
			document.removeEventListener("contextmenu", handleContextMenu);
		};
	}, []);

	const styles = {
		hoverBrightness: "hover:" + (isDarkMode ? "brightness-150" : "brightness-75"),
	};

	return (
		<AppContext.Provider value={{ user, setUser, isDarkMode, setDarkMode, styles }}>
			<div
				className={`flex flex-row relative justify-between w-full h-screen ${isDarkMode ? "bg-[#242524]" : "bg-[#F3F3F3]"} overflow-hidden`}
			>
				<Sidebar />

				<div className="w-full h-full m-2 overflow-y-auto overflow-x-hidden">
					<div className="w-full h-full">
						<Outlet />
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
