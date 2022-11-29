// pages/blogs/[id].js
import { client } from "../../../libs/client";
import { Navbar } from "../../../components/layouts/Navbar";
import { Card } from "../../../components/layouts/Card";

const PER_PAGE = 10;

export default function BlogPageId({ blogs, categories }) {
  return (
    <main>
      <Navbar />
      <div style={{ marginTop: 80 }}></div>
      <div className="container pt-md-1">
        <div>
          <p className="h4 fw-bold col-10 mt-4 mb-2">ー 全ての記事</p>
        </div>
        <div className="row justify-content-center mt-3">
          <div>
            {blogs.contents.map((blog) => {
              return <Card blog={blog} key={blog.id} />;
            })}
          </div>
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
