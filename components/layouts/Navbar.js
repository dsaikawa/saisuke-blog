import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/Navbar.module.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar border-bottom border-3 border-dark fixed-top"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid">
          <i className="h2">
            <IoMenu />
          </i>
          <Link className="blog-name fw-bold black-link h1" href="/">
            saisuke.dev
          </Link>
          <i className="h2">
            <IoSearch />
          </i>
        </div>
      </nav>
    </div>
  );
};
