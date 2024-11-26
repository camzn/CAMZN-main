 import { useContext } from "react";

import { IoChatbubbleSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router";
import { PiOrangeFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

import * as Dropdown from "./ui/Dropdown";

import AppContext from "../contexts/App";
import { AvatarWithStatus } from "./Profile";
import { getUser } from "../utils/api";

function RedCircle() {
	const { isDarkMode } = useContext(AppContext);

	return (
		<span
			className={`flex absolute w-[15px] h-[15px] bg-red-500 text-white -right-1 -top-1 rounded-full border-2 ${isDarkMode ? "border-dark-2" : "border-white"}`}
		/>
	);
}

export default function Sidebar() {
	const location = useLocation();

	const { isDarkMode, setDarkMode, styles } = useContext(AppContext);

	const user = getUser();

	const pages = [
		{
			href: "/",
			icon: <AiFillHome />,
			title: "Trang chủ",
		},
		{
			href: "/chat",
			icon: <IoChatbubbleSharp />,
			title: "Hộp thoại",
			className: "relative",
			redCircle: true,
		},
		{
			href: "/friends",
			icon: <FaUserGroup />,
			title: "Bạn bè",
		},
		{
			href: "/notifications",
			icon: <FaBell />,
			title: "Thông báo",
			className: "relative",
			redCircle: true,
		},
	];

	return (
		<div
			className={`flex flex-col ${isDarkMode ? "bg-dark-1" : "bg-white"} w-[65px] h-full shadow-lg py-2 justify-between items-center`}
		>
			<Link to={"/"}>
				<PiOrangeFill className="text-[#FF973D] text-[50px]" />
			</Link>

			<div className="flex flex-col gap-3" onClick={(e) => console.log(e.defaultPrevented)}>
				{pages.map((p, i) => (
					<div key={i} className="flex relative">
						<Link
							to={p.href}
							className={`${location.pathname === p.href ? "bg-[#FF973D] text-white" : isDarkMode ? `text-white bg-dark-3` : "bg-[#E7E7E7] text-[#858585]"} ${styles.hoverBrightness} rounded-xl p-2 items-center justify-center text-2xl transition-all duration-150 ${p.className}`}
							title={p.title}
						>
							{p.icon}
						</Link>
						{p.redCircle && <RedCircle />}
					</div>
				))}
			</div>

			<Dropdown.Root>
				<Dropdown.Trigger>
					<AvatarWithStatus
						user={user}
						avatarClassName={`peer-${styles.hoverBrightness} ${styles.hoverBrightness} transition-all`}
						statusClassName={`peer ${isDarkMode ? "border-dark-1" : "border-white"} transition-all`}
						border={isDarkMode && "dark-1"}
					/>
				</Dropdown.Trigger>

				<Dropdown.Content
					direction="top"
					className={`flex flex-col ${isDarkMode ? "bg-dark-3" : "bg-white"} shadow-lg min-w-[320px] rounded-xl p-2 gap-2`}
				>
					<Dropdown.Item closeOnSelect className="flex flex-col w-full">
						<Link
							to={`/users/${user.username}`}
							className={`flex font-bold w-full ${styles.hoverBrightness} ${isDarkMode ? "bg-dark-1 text-white" : "bg-gray-200"} gap-2 items-center rounded-xl p-2 transition-all duration-200`}
						>
							<AvatarWithStatus
								user={user}
								statusClassName={`${isDarkMode ? "border-dark-1" : "border-gray-200"} transition-all`}
							/>
							{user.displayName}
						</Link>
					</Dropdown.Item>

					<Dropdown.Item className="flex flex-col">
						<button
							className={`flex items-center gap-3 w-full text-left p-2 rounded-xl bg-white ${styles.hoverBrightness} transition-all duration-200`}
							onClick={() => setDarkMode(!isDarkMode)}
						>
							<div className="text-xl p-2 bg-gray-300 rounded-full">
								<TbLogout2 />
							</div>{" "}
							Đăng xuất
						</button>
					</Dropdown.Item>
				</Dropdown.Content>
			</Dropdown.Root>
		</div>
	);
}
