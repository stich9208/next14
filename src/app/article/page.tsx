/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

const Article = async () => {
  const getArticleList = async () => {
    const list = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 },
    });
    return list;
  };

  const result = await getArticleList();
  const articleList = await result.json();

  return (
    <div>
      {articleList?.map((article: any) => (
        <Link href={`article/${article.id}`}>
          <div
            key={article.id}
            style={{
              border: "2px solid black",
              marginBottom: "20px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
          >
            {article.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Article;
