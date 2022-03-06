import React from "react";
import ReactLogo from "./Image/christforyou.svg";
const Logo = () => {
  return (
    <div className="Logo">
      <a href="/" className="Logo">
        <img src={ReactLogo} alt="logo"></img>
      </a>
    </div>
  );
};

export default Logo;
