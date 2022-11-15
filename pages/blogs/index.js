// pages/index.js
import Link from "next/link";
import { client } from "../../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      {
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              {<Link href={`/blogs/${blog.id}`}>{blog.title}</Link>}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  console.log("start");
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
