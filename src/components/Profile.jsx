/* eslint-disable react/prop-types */

import { UserStatus } from "../constants/user";

export function Avatar({ user, className, ...props }) {
	return (
		<img src={user.avatarURL} className={`w-full h-full rounded-full ${className}`} {...props} />
	);
}

export function Status({ user, className = "" }) {
	let shapeStyle;

	switch (user.status) {
		case UserStatus.Online:
			shapeStyle = "bg-green-600";
			break;
		case UserStatus.Offline:
			shapeStyle = "outline outline-2 outline-gray-500";
			break;
		case UserStatus.DND:
			shapeStyle = "bg-red-600";
			break;
		case UserStatus.Idle:
			shapeStyle = "bg-yellow-600";
			break;
	}

	return <span className={`rounded-full w-[20px] h-[20px] ${shapeStyle} ${className}`}></span>;
}

export function AvatarWithStatus({
	user,
	className,
	avatarClassName,
	statusClassName,
	alt = "Your avatar",
}) {
	return (
		<div className={`flex relative transition-all duration-150 w-[45px] h-[45px] ${className}`}>
			<Status user={user} className={`z-20 absolute right-0 bottom-0 border-2 ${statusClassName}`} />
			<Avatar user={user} className={`z-10 ${avatarClassName}`} alt={alt} />
		</div>
	);
}
