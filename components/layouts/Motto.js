import Link from "next/link";
import { divLinkStyle, linkStyle } from "../../libs/style";

export const Motto = () => {
  return (
    <div
      className="text-center border border-3 border-dark rounded-2 shadow fw-bold card-hover"
      style={divLinkStyle}
    >
      <Link
        className="black-link"
        href={"/blogs/page/1"}
        style={linkStyle}
      ></Link>
      <p className="mb-0">もっと見る</p>
    </div>
  );
};
