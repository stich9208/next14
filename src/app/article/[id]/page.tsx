import { redirect } from "next/navigation";

const Detail = async ({ params }: { params: { id: string } }) => {
  const postId = params.id;

  const getArticleDetail = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const detailInfo = await result.json();
    return detailInfo;
  };

  const articleInfo: {
    userId: number;
    id: number;
    title: string;
    body: string;
  } = await getArticleDetail();

  console.log(articleInfo);

  {
    return !articleInfo?.userId ? (
      redirect("/article")
    ) : (
      <div>
        <h1>{articleInfo?.title}</h1>
        <p style={{ whiteSpace: "pre-wrap" }}>{articleInfo?.body}</p>
      </div>
    );
  }
};

export default Detail;
