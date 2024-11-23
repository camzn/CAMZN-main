import "./Sidebar.css";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function Sidebar() {
	const account = {
		name: "He he he",
		status: "Online",
	};

	return (
		<div className="LeftBar">
			<div className="LeftBar__Top">
				<div className="LeftBar__Top__Search">
					<button>
						<FaMagnifyingGlass className="IconSearch"></FaMagnifyingGlass>
					</button>
					<input type="text" placeholder="Tìm kiếm" />
				</div>
			</div>

			<div className="LeftBar__Mid">
				<button className="SelectedBtn">
					<MdOutlineHome className="HomeIcon"></MdOutlineHome>
					<span>Trang chủ</span>
				</button>

				<button>
					<IoChatboxEllipsesOutline className="BoxIcon"></IoChatboxEllipsesOutline>
					<span>Hộp thoại</span>
				</button>

				<button>
					<BsThreeDots className="ThreeDotsIcon"></BsThreeDots>
					<span>Mở rộng</span>
				</button>
			</div>
			
			<div className="LeftBar__Bottom">
				<div className="LeftBar__Bottom__Account">
					<div className="LeftBar__Bottom__Account__Avatar">
						<img src="images/avatar.jpg" alt="Your Avatar" />
					</div>

					<div className="LeftBar__Bottom__Account__Text">
						<span className="Name">{account.name}</span>
						<span className={`CurrentAccount ${account.status}`}>
							{account.status === "Online" ? "Trực tuyến" : "Ngoại tuyến"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
