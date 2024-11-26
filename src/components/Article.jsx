/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import AppContext from "../contexts/App";

const VIDEO_EXTENSIONS = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"];
const IMAGE_EXTENSIONS = [".gif", ".jpg", ".jpeg", ".png"];

function isVideo(name) {
	return VIDEO_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function isImage(name) {
	return IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function getLikesText(Likes) {
	let lengthOfLikes = Math.floor(Math.log10(Likes)) + 1;

	let result = "";

	// console.log(Math.pow(10, ));
	while (lengthOfLikes >= 4) {
		let divisor;

		// [4,6]
		if (lengthOfLikes >= 4 && lengthOfLikes <= 6) {
			result = "K" + result;
			divisor = 3;
		}
		// [7,9]
		else if (lengthOfLikes >= 7 && lengthOfLikes <= 9) {
			result = "M" + result;
			divisor = 6;
		}
		// [10, +inf]
		else if (lengthOfLikes >= 10) {
			result = "B" + result;
			divisor = 9;
		}

		Likes = Math.floor(Likes / Math.pow(10, divisor));
		lengthOfLikes = Math.floor(Math.log10(Likes)) + 1;
	}

	return `${Likes}${result}`;

}

function getMediaGrid(length) {
	switch (length) {
		case 1:
			return "grid-rows-1 grid-cols-1";
		case 2:
			return "grid-rows-1 grid-cols-2";
		default:
			return "grid-rows-2 grid-cols-2";
	}
}

export default function Article({ post }) {
	const { isDarkMode } = useContext(AppContext);

	let [likes, setLikes] = useState(post.likes);
	let [isLike, setIsLikes] = useState(post.isLike);

	function handleLike() {
		setIsLikes(!isLike);

		if (!isLike) {
			setLikes(likes + 1);
		} else {
			setLikes(likes - 1);
		}
	}

	const mediaGrid = getMediaGrid(post.medias.length);

	return (
		<div className={`w-[400px] flex flex-col ${isDarkMode ? "bg-dark-3 text-white" :"bg-[white]"} rounded-[10px] p-[15px] items-center gap-3 shadow-md`}>
			{/* User */}
			<div className="flex items-center gap-3 w-full">
				<img
					className="w-[50px] h-[50px] object-cover rounded-full"
					src={post.author.avatarURL}
					alt={`${post.author.username}'s Avatar`}
				/>
				<p className={`text-[20px] ${!isDarkMode && "text-[rgb(68,68,68)]"}`}>{post.author.displayName}</p>
			</div>

			<p className={`${!isDarkMode && "text-[rgb(76,76,76)]"} text-[20px] w-full`}>{post.text}</p>

			<div className={`max-w-[375px] max-h-[375px] grid gap-2 ${mediaGrid} ${!post.medias.length && "hidden"}`}>
				{post.medias.map((media, index) => {
					if (index >= 4) {
						return;
					}

					if (isImage(media))
						return (
							<div
								className={`relative ${index === 2 && post.medias.length === 3 && "col-start-1 col-end-3"} hover:brightness-75 cursor-pointer transition-all duration-150 rounded-xl overflow-hidden`}
								key={index}
								style={{
									transform: "translate3d(0px, 0px, 0.1px)",
								}}
							>
								<img
									className={`w-full h-full object-cover ${post.medias.length > 4 && index == 3 && "brightness-50"} pointer-events-none `}
									src={media}
								/>

								<span className="absolute z-50 text-[35px] text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none">
									{index === 3 && post.medias.length > 4 && `+${post.medias.length - 4}`}
								</span>
							</div>
						);

					// Video Post
					else if (isVideo(media)) {
						// ...
					}
				})}
			</div>

			{/* More */}
			<div className="flex justify-between items-center w-full">
				<div className="flex items-center text-[30px] gap-2 text-[#FF973D]">
					{isLike ? (
						<button
							className="cursor-pointer hover:scale-[115%] transition-all duration-150"
							onClick={handleLike}
						>
							<FaHeart></FaHeart>
						</button>
					) : (
						<button
							className="cursor-pointer hover:scale-[115%] transition-all duration-150"
							onClick={handleLike}
						>
							<FaRegHeart></FaRegHeart>
						</button>
					)}

					<span className={`text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>{getLikesText(likes)}</span>
				</div>

				<div className={`flex items-center gap-2 text-[34px] ${isDarkMode ? "text-white" : "text-[hsl(0,0%,18%)]"}`}>
					<button className={`hover:bg-[#E7E7E7]${isDarkMode && "/10"} p-[10px] rounded-full transition-all duration-150`}>
						<IoChatbox />
					</button>

					<button className={`hover:bg-[#E7E7E7]${isDarkMode && "/10"} p-[10px] rounded-full transition-all duration-150`}>
						<IoIosShareAlt />
					</button>

					<button className={`hover:bg-[#E7E7E7]${isDarkMode && "/10"} p-[10px] rounded-full transition-all duration-150`}>
						<HiDotsHorizontal />
					</button>
				</div>
			</div>
		</div>
	);
}
