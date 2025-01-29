import React from "react";
// import search from "./H-Logos/search.png";
// import heart from "./H-Logos/heart.png";
// import cell from "./H-Logos/cell.png";
// import user from "./H-Logos/user.png";
// import pin from "./H-Logos/pin.png";
// import plug from "./H-Logos/plug.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-header">
      <div className="head">
        <div className="logo">
          <img
            src="https://stimg.cardekho.com/pwa/img/CarDekho-Christmas-Logo.svg"
            alt=""
          />
        </div>
        <div className="searchBar">
          <div className="all-opt">
            <div className="all">
              <a href="">All</a>
              <span> ▼</span>
            </div>
            <div className="search-logo">
              {/* <img src={search} alt="" /> */}
            </div>
          </div>
          <input type="text" placeholder="Search or Ask a Question" />
        </div>
        <div className="side-head">
          <div className="l-o">
            <a href="">English</a>
            <span> ▼</span>
          </div>
          {/* <img src={heart} alt="" class="like" /> */}
          <div className="log-reg-but">
            {/* <img src={user} alt="" class="user" /> */}
            <button>Login / Register</button>
          </div>
        </div>
      </div>
      </div>
      <div className="buttom-header">
      <div className="navbar">
        <div className="nav">
          <div className="sec-nav">
            <a href="">NEW CARS
            <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              USED CARS <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              NEWS & REVIEWS <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              VIDEOS <span>▼</span>
            </a>
          </div>
        </div>

        <div className="select-city">
          {/* <img src={pin} alt="" /> */}
          <a href="">
            {" "}
            Select City <span>▼</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Header;