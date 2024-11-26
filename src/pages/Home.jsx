import Article from "../components/Article";
import { getUser } from "../utils/api";

export default function Home() {
	// const ElonMusk = {
	// 	name : "Elon Musk",
	// 	// Avatar Elon Musk 
	// 	avatar : "https://cafefcdn.com/thumb_w/640/203337114487263232/2024/11/24/avatar1732435179820-1732435180765633761931.jpg",
	// 	msg : "Nguyen Tien Dat, you are so wibu",
	// 	media : "",
	// }

	const post = {
		author: getUser(),
		text: "<3",
		medias: [
			"/images/img1.jpg",
			"/images/img2.jpg",
			"/images/img3.jpg",
			"/images/img4.jpg",
			"/images/img5.jpg",
		],
		likes: 50,
		isLike: false,
		comments: [],
	};

	const post2 = {
		author: {
			displayName: "Bill Gate",
			status: "Online",
			avatarURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/500px-Bill_Gates_2018.jpg",
		},
		text: "I wish I was richer than Elon Musk :(",
		medias: [],
		likes: 10000,
		isLike: false,
		comments: [],
	};

	const post3 = {
		author: {
			displayName: "Elon Musk",
			status: "Online",
			avatarURL: "https://cafefcdn.com/thumb_w/640/203337114487263232/2024/11/24/avatar1732435179820-1732435180765633761931.jpg",
		},
		text: "I wish I was pooper than Bill Gate :(",
		medias: [],
		likes: 100000,
		isLike: false,
		comments: [],
	};

	return (
		<div className="">
			<div className="flex flex-col gap-10 items-center justify-center">
				<Article post={post}></Article>
				<Article post={post2}></Article>
				<Article post={post3}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
			</div>

			{/* Online, Notification, post articles */}
			<div></div>
		</div>
	);
}
