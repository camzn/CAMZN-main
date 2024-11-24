/* eslint-disable react/prop-types */
import { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

const VIDEO_EXTENSIONS = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"];
const IMAGE_EXTENSIONS = [".gif", ".jpg", ".jpeg", ".png"];

function isVideo(name) {
	return VIDEO_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function isImage(name) {
	return IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
}

export default function Article(props) {
	let [likes, setLikes] = useState(props.information.likes);
	let [isLike, setIsLikes] = useState(props.information.isLike);

	function likeButton() {
		if (isLike) {
			setLikes((c) => c - 1);
		} else {
			setLikes((c) => c + 1);
		}

		setIsLikes(!isLike);
	}

	return (
		<div
			className={`w-1/2 bg-[white] rounded-[10px] ml-[10%] p-[20px] my-${props.firstChild ? "[0px]" : "[50px]"} shadow-md`}
		>
			{/* User */}
			<div className="flex items-center">
				<img
					className="w-[50px] rounded-full"
					src={props.information.author.avatarURL}
					alt={`${props.information.author.username}'s Avatar`}
				/>
				<p className="text-[20px] ml-[15px] text-[rgb(68,68,68)]">
					{props.information.author.username}
				</p>
			</div>

			<hr className="-mx-[20px] mt-[10px]" />
			{/* <hr className="-mx-[20px] mt-[10px] h-[2px] bg-black" /> */}

			{/* Title */}
			<p className="text-[rgb(76,76,76)] my-[20px]">{props.information.text}</p>

			<div
				className={`grid gap-4 ${
					props.information.medias.length === 1
						? "grid-rows-1 grid-cols-1"
						: props.information.medias.length === 2
							? "grid-rows-1 grid-cols-2"
							: props.information.medias.length === 3
								? "grid-rows-2 grid-cols-2"
								: "grid-rows-2 grid-cols-2"
				} h-[90%]`}
			>
				{props.information.medias.map((media, index) => {
					if (index >= 4) {
						return;
					}

					if (isImage(media))
						return (
							<div className="relative" key={index}>
								<img
									className={`${
										props.information.medias.length === 3 && index === 2
											? "col-start-1 col-end-3"
											: "w-full h-full"
									} object-cover`}
									src={media}
								/>
								<div
									className={`cursor-pointer absolute inset-0 bg-black ${props.information.medias.length > 4 && index == 3 ? "bg-opacity-50" : "bg-opacity-0 hover:bg-opacity-20"} transition-opacity flex justify-center items-center`}
									style={{ transition: "0.1s" }}
								>
									<p className="text-white text-[50px]">
										{props.information.medias.length > 4 && index == 3
											? `${props.information.medias.length - index - 1}+`
											: ""}
									</p>
								</div>
							</div>
						);
					else if (isVideo(media)) {
                        // ...
					}
				})}
			</div>

			{/* More */}
			<div className="flex justify-between my-[20px] text-[30px] items-center">
				<div className="flex items-center">
					{isLike ? (
						<FcLike
							className="cursor-pointer hover:text-[35px] transition-all duration-150"
							onClick={likeButton}
						></FcLike>
					) : (
						<FaRegHeart
							className="cursor-pointer hover:text-[35px] transition-all duration-150"
							onClick={likeButton}
						></FaRegHeart>
					)}

					<p className="ml-[10px]">{likes}</p>
				</div>
				<div className="flex items-center">
					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full mx-[5px] transition-all duration-150">
						<IoChatboxEllipsesOutline></IoChatboxEllipsesOutline>
					</button>

					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full mx-[5px] transition-all duration-150">
						<IoIosShareAlt></IoIosShareAlt>
					</button>

					<button className="hover:bg-[#E7E7E7] p-[10px] rounded-full mx-[5px] transition-all duration-150">
						<IoReorderThreeOutline className="text-[36px]"></IoReorderThreeOutline>
					</button>
				</div>
			</div>
		</div>
	);
}
