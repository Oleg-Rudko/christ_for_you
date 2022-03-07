import React from "react";
import ReactLogo from "./LogoImage/christforyou.svg";
const Logo = () => {
  return (
    <div className="Logo">
      <a href="/" className="LogoLink">
        <img className="LogoSvg" src={ReactLogo} alt="Logo"></img>
      </a>
    </div>
  );
};

export default Logo;
