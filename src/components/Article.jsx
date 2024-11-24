/* eslint-disable react/prop-types */
import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

const VIDEO_EXTENSIONS = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"];
const IMAGE_EXTENSIONS = [".gif", ".jpg", ".jpeg", ".png"];

function isVideo(name) {
	return VIDEO_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function isImage(name) {
	return IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
}

export default function Article({ post }) {
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

	const mediaClassName =
		"w-full grid gap-2 items-center" +
		(function () {
			switch (post.medias.length) {
				case 1:
					return "grid-rows-1 grid-cols-1";
				case 2:
					return "grid-rows-2 grid-cols-1";
				default:
					return "grid-rows-2 grid-cols-2";
			}
		})();

	return (
		<div className={`flex flex-col bg-[white] rounded-[10px] p-[15px] gap-3 shadow-md`}>
			{/* User */}
			<div className="flex items-center gap-3">
				<img
					className="w-[50px] rounded-full"
					src={post.author.avatarURL}
					alt={`${post.author.username}'s Avatar`}
				/>
				<p className="text-[20px] text-[rgb(68,68,68)]">{post.author.username}</p>
			</div>

			<p className="text-[rgb(76,76,76)] ">{post.text}</p>

			<div className={mediaClassName}>
				{post.medias.map((media, index) => {
					if (index >= 4) {
						return;
					}

					const rounded = (function () {
						switch (index) {
							case 0:
								return "rounded-tl-2xl";
							case 1:
								return "rounded-tr-2xl";
							case 2:
								return "rounded-bl-2xl";
							case 3:
								return "rounded-br-2xl";
						}
					})();

					if (isImage(media))
						return (
							<div
								className={`relative max-w-[200px] max-h-[200px] ${rounded} hover:brightness-75 overflow-hidden cursor-pointer transition-all duration-150`}
								key={index}
								style={{
									transform: "translate3d(0px, 0px, 0.1px)",
								}}
								onClick={() => console}
							>
								<img className={`w-full h-full object-cover ${rounded} ${post.medias.length > 4 && index == 3 && "brightness-50"} pointer-events-none`} src={media} />
								
								<span className="absolute z-50 text-[35px] text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none">
									{index === 3 && post.medias.length > 4 && `+${post.medias.length - 4}`}
								</span>
							</div>
						);
					else if (isVideo(media)) {
						// ...
					}
				})}
			</div>

			{/* More */}
			<div className="flex justify-between items-center">
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

					<span className="text-[20px] text-black">{likes}</span>
				</div>

				<div className="flex items-center gap-2 text-[34px] text-[hsl(0,0%,18%)]">
					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full transition-all duration-150">
						<IoChatbox />
					</button>

					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full transition-all duration-150">
						<IoIosShareAlt />
					</button>

					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full transition-all duration-150">
						<HiDotsHorizontal />
					</button>
				</div>
			</div>
		</div>
	);
}
