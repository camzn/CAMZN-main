import Article from "./Article"

export default function Home() {
    const post = {
        author : {
            username : "Nguyễn Tiến Đạt",
            status : "Online",
            avatarURL : "../../public/images/avatar.jpg"
        },
        text : "Gái Đẹp :))",
        medias : [
            "../../public/images/img1.jpg",
            "../../public/images/img2.jpg",
            "../../public/images/img3.jpg",
            "../../public/images/img4.jpg",
            "../../public/images/img5.jpg",
        ],
        likes : 10,
        isLike : false,
        comment : []
    }

    return (
        <div className="">
            {/* Post */}
            <div>
                <Article information = {post} firstChild = {true}></Article>
                <Article information = {post}></Article>
                <Article information = {post}></Article>
                <Article information = {post}></Article>
                <Article information = {post}></Article>
                <Article information = {post}></Article>
                <Article information = {post}></Article>

            </div>

            {/* Online, Notification, post articles */}
            <div>

            </div>
        </div>
    );
}