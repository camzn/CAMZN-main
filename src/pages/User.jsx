import { useParams } from "react-router";

export default function User() {
	const { username } = useParams();

	if (!username) {
		return;
	}

	const account = {
		displayName: "Nguyễn Tiến Đạt",
		username: "louiszn",
		status: "Online",
		avatarURL: "/images/avatar.jpg",
	};

	return (
		<div className="w-full h-full">
			<div className="bg-[#FF973D] relative w-full h-[200px] rounded-xl">
				<div className="flex gap-5 absolute -bottom-[60px] left-[60px] w-full">
					<div className="relative">
						<span className="absolute inline-block rounded-full w-[40px] h-[40px] bg-green-600 right-0 bottom-0 outline outline-[3px] outline-[#F3F3F3]"></span>
						<img
							src={account.avatarURL}
							className="w-[120px] h-[120px] rounded-full outline outline-[4px] outline-[#F3F3F3]"
							alt="Your Avatar"
						/>
					</div>

                    <span className="font-bold text-[35px] bottom-0 absolute left-[140px] text-[#333333]">{account.displayName}</span>
				</div>
			</div>
		</div>
	);
}
