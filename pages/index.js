// pages/index.js
import { client } from "../libs/client";
import { Navbar } from "../components/layouts/Navbar";
import { Card } from "../components/layouts/Card";
import { Introduce } from "../components/layouts/Introduce";
import { Motto } from "../components/layouts/Motto";

export default function Home({ blogs }) {
  return (
    <div>
      <Navbar />
      <div className="contents" style={{ marginTop: 70 }}>
        <div className="container">
          <div className="row">
            <div className="mt-3 col-lg-7">
              <img
                className="border border-3 border-dark rounded-2"
                src="/image/typeman.gif"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="mt-3 col-lg-5">
              <div
                className="border border-3 border-dark rounded-2 shadow"
                style={{ height: "100%" }}
              >
                <Introduce />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-2">
          <div className="row">
            <p className="h4 fw-bold col-10">ー 最新記事</p>
            <div className="col-2 d-none d-lg-block">
              <Motto />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div>
              {blogs.map((blog) => {
                return <Card blog={blog} key={blog.id} />;
              })}
            </div>
            <div className="col-6 d-lg-none mb-4">
              <Motto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  console.log("start");
  const data = await client.get({
    endpoint: "blogs",
    queries: { offset: 0, limit: 5 },
  });
  return {
    props: {
      blogs: data.contents,
    },
  };
};
