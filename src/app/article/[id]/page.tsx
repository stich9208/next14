import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Detail = () => {
  const pathname = usePathname();
  const postId = pathname.split("/")[2];
  const [articleInfo, setArticleInfo] = useState<{
    body: string;
    id: number;
    title: string;
    userId: number;
  }>({ body: "", id: 0, title: "", userId: 0 });

  useEffect(() => {
    (async () => {
      const info = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const parsed = await info.json();
      setArticleInfo(parsed);
    })();
  }, []);

  return (
    <div>
      <h1>{articleInfo.title}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{articleInfo.body}</p>
    </div>
  );
};

export default Detail;
