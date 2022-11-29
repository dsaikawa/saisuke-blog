// pages/blogs/[id].js
import { client } from "../../libs/client";
import { Navbar } from "../../components/layouts/Navbar";
import { Introduce } from "../../components/layouts/Introduce";
import { createCategories } from "../../components/layouts/Category";
import { parseDate } from "../../libs/data";

export default function BlogId({ blog, categories }) {
  const content = blog.content.replaceAll("<img", '<img style="width: 100%;"');
  const categoryList = categories.contents.map((category) => {
    return category.name;
  });
  return (
    <main>
      <Navbar />
      <div className="container" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col-lg-8">
            <img
              className="my-lg-4 mb-2 border border-3 border-dark rounded-3"
              src={blog.eyecatch.url}
              style={{ width: "100%" }}
            ></img>
            <p className="date">{parseDate(blog.publishedAt)}</p>
            <h1 className="fw-bold">{blog.title}</h1>
            {createCategories(categoryList)}
            <div
              dangerouslySetInnerHTML={{
                __html: `${content}`,
              }}
              className="mt-4"
            />
          </div>
          <div className="col-lg-4">
            <div className="my-lg-4 border border-3 border-dark rounded-2 shadow">
              <Introduce />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const blogData = await client.get({ endpoint: "blogs", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: blogData,
      categories: categoryData,
    },
  };
};
