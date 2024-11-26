import { UserStatus } from "../constants/user";

export function getUser() {
	return {
		username: "louiszn",
        displayName: "Nguyễn Tiến Đạt",
		status: UserStatus.Online,
		avatarURL: "/images/avatar.jpg",
	};
}
