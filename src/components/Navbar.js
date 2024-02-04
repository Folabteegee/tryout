import React from "react";
import "../styles/navbar.css";
import Search from "../icons/Search";
import Option from "../icons/Option";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav_links">
        <div className="news">News</div>

        <div>Portal</div>
      </div>

      <div className="nav_icons">
        <div className="search">
          <Search />
        </div>

        <div className="option">
          <Option />
        </div>
      </div>
    </div>
  );
}
