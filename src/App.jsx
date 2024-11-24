import { useEffect } from "react";
import { Outlet } from "react-router";

import Sidebar from "./components/Sidebar";

function App() {
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
		<div className="flex flex-row relative justify-between w-full h-screen bg-[#F3F3F3] overflow-hidden">
			<Sidebar />

			<div className="w-full h-full overflow-x-hidden overflow-y-auto">
				<div className="m-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
