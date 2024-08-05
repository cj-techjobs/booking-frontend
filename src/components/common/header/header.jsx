import React, { useState } from "react";
import "../header/header.scss";
import { CgSearch } from "react-icons/cg";
import logo from "../../../assets/app-log/six6-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("Ravi Sharma");
  const [searchData, setSearchData] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  return (
    <header
      id="header"
      className="header py-2 pr-4 flex justify-between items-center"
    >
      <div className="">
        <Link to={"/"}>
          <img src={logo} className="h-12" alt="" />
        </Link>
      </div>

      <div className="flex items-center gap-4 rounded-lg shadow-inner h-12 shadow-md border-2 basis-1/3 px-4">
        <div className="search-bar-icon">
          <CgSearch className="text-2xl"></CgSearch>
        </div>
        <div className="search-bar-input w-full">
          <form>
            <input
              className="w-full text-lg focus-visible:none"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>

        {/* {
          isSearch && searchData &&
        } */}
      </div>

      <div className="flex items-center gap-4">
        <div className="profile-name">
          <p className="text-sm font-semi">Welcome</p>
          <p className="text-lg font-bold">{username}</p>
        </div>
        <div className="flex items-center justify-center rounded-full w-11 h-11 bg-green-600">
          <p className="">{username.slice(0, 1)}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
