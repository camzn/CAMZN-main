import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import Friends from "./pages/Friends";
import User from "./pages/User";
import NotFound from "./NotFound";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/users/:username" element={<User />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
