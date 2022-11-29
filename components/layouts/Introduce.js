import { divLinkStyle, linkStyle } from "../../libs/style";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";

export const Introduce = () => {
  return (
    <div className="container-fluid linkbox card-hover" style={divLinkStyle}>
      <Link href="#" style={linkStyle}></Link>
      <div className="row justify-content-center">
        <div className="image col-8">
          <img
            className="mt-4 border border-3 border-dark rounded-2"
            src="/image/saisuke.png"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-lg-10 col-11">
          <p className="mt-2 fw-bold h3 text-center">saisuke</p>
          <div className="m-2 icons text-center position-relative">
            <Link
              className="black-link m-2 h4"
              href="https://github.com/dsaikawa"
              target="_blank"
            >
              <BsGithub />
            </Link>

            <Link
              className="black-link m-2 h4"
              href="https://twitter.com/3889Daisuke"
              target="_blank"
            >
              <BsTwitter />
            </Link>
          </div>
          <p className="m-3 text-wrap h6">
            自己紹介テキスト、自己紹介テキスト、自己紹介テキスト、自己紹介テキスト、自己紹介テキスト、自己紹介テキスト、自己紹介テキスト、
            <br></br>好きな言語はHaskell
          </p>
        </div>
      </div>
    </div>
  );
};
