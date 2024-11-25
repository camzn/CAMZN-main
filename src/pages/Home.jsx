import Article from "../components/Article";

export default function Home() {
	const post = {
		author: {
			username: "Nguyễn Tiến Đạt",
			status: "Online",
			avatarURL: "/images/avatar.jpg",
		},
		text: "<3",
		medias: [
			"/images/img1.jpg",
			"/images/img2.jpg",
			"/images/img3.jpg",
			"/images/img4.jpg",
			"/images/img5.jpg",
		],
		likes: 10,
		isLike: false,
		comments: [],
	};

	return (
		<div className="">
			<div className="flex flex-col gap-10 items-center justify-center">
				<Article post={post}></Article>
				{/* <Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article>
				<Article post={post}></Article> */}
			</div>

			{/* Online, Notification, post articles */}
			<div></div>
		</div>
	);
}
