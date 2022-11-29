import Link from "next/link";
import { divLinkStyle } from "../../libs/style";

export const createCategories = (categories) => {
  return (
    <div style={divLinkStyle}>
      {categories.map((category) => {
        return (
          <Link
            className="fw-lighter black-link me-1 mb-1 p-1 border border-1 border-dark rounded-1 shadow"
            href="#"
            style={{ fontSize: 11 }}
            key={category}
          >
            #{category}
          </Link>
        );
      })}
    </div>
  );
};
