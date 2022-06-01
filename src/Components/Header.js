import React from "react";
import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");
    const listItems = document.querySelectorAll(".list-item");

    navbar.classList.toggle("open");

    listItems.forEach((item) =>
      item.addEventListener("click", () => navbar.classList.remove("open"))
    );
  };

  return (
    <>
      <div className="header flex items-center justify-between w-full lg:flex-row">
        <div>
          <Link to="/">
            <img src={Logo} alt="space tourism" title="space tourism" />
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li className="list-item">
              <Link to="/" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-4xl lg:font-bold mr-2">00</span>Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/destination" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-4xl lg:font-bold mr-2">01</span> Destination
              </Link>
            </li>
            <li className="list-item">
              <Link to="/crew" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-4xl lg:font-bold mr-2">02</span>Crew
              </Link>
            </li>
            <li className="list-item">
              <Link to="/technology" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-4xl lg:font-bold mr-2">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={handleClick}>
            <MenuIcon className="text-white text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
