import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import Friends from "./pages/Friends";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/notifications" element={<Notifications />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
