import Link from "next/link";
import { parseDate } from "../../libs/data";
import { divLinkStyle, linkStyle } from "../../libs/style";
import { createCategories } from "./Category";

export const Card = (blog) => {
  const categories = blog.blog.category.map((category) => {
    return category.name;
  });

  return (
    <div
      className="card-hover border border-3 border-dark rounded-3 container mt-3 mb-3 shadow"
      style={divLinkStyle}
    >
      <div className="row justify-content-center">
        <Link href={`/blogs/${blog.blog.id}`} style={linkStyle}></Link>
        <div className="col-lg-3 col-8 d-flex align-items-center">
          <img
            className="my-lg-4 mt-4 mb-2 border border-3 border-dark rounded-3"
            src={blog.blog.eyecatch.url}
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="my-lg-4 mt-2 mb-4 col-lg-8 align-middle">
          <p className="date">{parseDate(blog.blog.publishedAt)}</p>
          <p className="mb-4 h2 fw-bold">{blog.blog.title}</p>
          {createCategories(categories)}
        </div>
      </div>
    </div>
  );
};
