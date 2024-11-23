import { Outlet } from "react-router";

import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="flex flex-row gap-2 w-screen h-screen bg-[#F3F3F3]">
			<Sidebar />

			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
