import React from "react";
import "./homePage.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="menuContent">
          <h1 className="title">HATS</h1>
          <span className="ttitleSpan">SHOP NOW</span>
        </div>
      </div>
      {/* the secont*/}
      <div className="menu-item">
        <div className="menuContent">
          <h1 className="title">JACKETS</h1>
          <span className="ttitleSpan">SHOP NOW</span>
        </div>
      </div>
      {/* the third*/}
      <div className="menu-item">
        <div className="menuContent">
          <h1 className="title">WOMENS</h1>
          <span className="ttitleSpan">SHOP NOW</span>
        </div>
      </div>
      {/* the fourth*/}
      <div className="menu-item">
        <div className="menuContent">
          <h1 className="title">MENS</h1>
          <span className="ttitleSpan">SHOP NOW</span>
        </div>
      </div>
      {/* the fifth*/}
      <div className="menu-item">
        <div className="menuContent">
          <h1 className="title">SNEAKERS</h1>
          <span className="ttitleSpan">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
