import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

export default function NotFound() {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center gap-2 text-">
			<FaLock className="text-[60px] text-[#858585]" />

			<span className="text-2xl text-[#858585] font-bold">Không thể truy cập trang này</span>

			<Link
				to={"/"}
				title="Về trang chủ"
				className="font-bold text-lg text-white bg-[#FF973D] hover:brightness-75 px-3 py-2 rounded-xl transition-all duration-150"
			>
				Về trang chủ
			</Link>
		</div>
	);
}
