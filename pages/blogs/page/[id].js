// pages/blogs/[id].js
import { client } from "../../../libs/client";
import { Navbar } from "../../../components/layouts/Navbar";
import { Card } from "../../../components/layouts/Card";
import { Introduce } from "../../../components/layouts/Introduce";

const PER_PAGE = 10;

export default function BlogPageId({ blogs, categories }) {
  return (
    <main>
      <Navbar />
      <div className="container" style={{ marginTop: 80 }}>
        <div className="row justify-content-center">
          <div>
            {blogs.contents.map((blog) => {
              return <Card blog={blog} key={blog.id} />;
            })}
          </div>
        </div>
        <div className="border border-3 border-dark rounded-3 container mb-3 shadow">
          <Introduce />
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const pageCount = Math.ceil(data.totalCount / PER_PAGE);

  const paths = [...Array(pageCount)].map((_, i) => `/blogs/page/${i + 1}`);
  console.log(paths);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const blogData = await client.get({
    endpoint: "blogs",
    queries: { offset: (id - 1) * 10, limit: 10 },
  });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blogs: blogData,
      categories: categoryData,
    },
  };
};
