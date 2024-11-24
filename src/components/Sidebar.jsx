import { IoChatbubbleSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router";
import { PiOrangeFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import * as Dropdown from "./ui/Dropdown";

export default function Sidebar() {
	const location = useLocation();

	const user = {
		displayName: "Nguyễn Tiến Đạt",
		username: "louiszn",
		status: "Online",
		avatarURL: "/images/avatar.jpg",
	};

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
			children: (
				<span className="flex absolute w-[15px] h-[15px] bg-red-500 border-2 border-white text-white -right-1 -top-1 rounded-full"></span>
			),
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
			children: (
				<span className="flex absolute w-[15px] h-[15px] bg-red-500 border-2 border-white text-white -right-1 -top-1 rounded-full"></span>
			),
		},
	];

	return (
		<div className="flex flex-col bg-white w-[65px] h-full shadow-lg py-2 justify-between items-center">
			<Link to={"/"}>
				<PiOrangeFill className="text-[#FF973D] text-[50px]" />
			</Link>

			<div className="flex flex-col gap-3" onClick={(e) => console.log(e.defaultPrevented)}>
				{pages.map((p, i) => (
					<Link
						to={p.href}
						key={i}
						className={`${location.pathname === p.href ? "bg-[#FF973D] text-white" : "bg-[#E7E7E7] text-[#858585]"} rounded-xl p-2 items-center justify-center text-2xl hover:brightness-75 transition-all duration-150 ${p.className}`}
						title={p.title}
						
					>
						{p.icon}
						{p.children}
					</Link>
				))}
			</div>

			<Dropdown.Root>
				<Dropdown.Trigger className="flex relative hover:brightness-75 transition-all duration-150">
					<span className="absolute inline-block rounded-full w-[20px] h-[20px] bg-green-600 right-0 bottom-0 border-2 border-white"></span>
					<img src={user.avatarURL} className="w-[45px] h-[45px] rounded-full" alt="Your Avatar" />
				</Dropdown.Trigger>

				<Dropdown.Content className="bg-white shadow-lg w-[200px] rounded-xl p-2">
					<Dropdown.Item closeOnSelect>
						<Link
							to={`/users/${user.username}`}
							className="flex font-bold hover:brightness-75 w-full bg-gray-200 rounded-xl p-2"
						>
							{user.displayName}
						</Link>
					</Dropdown.Item>
				</Dropdown.Content>
			</Dropdown.Root>
		</div>
	);
}
