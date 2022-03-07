import React from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Order from "./Order/Order";
import Hamburger from "./HamburgerMenu/HamburgerMenu";

const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderContainer">
        <Logo />
        <div className="NavHidden">
          <Nav />
        </div>
        <div className="OrderHidden">
          <Order />
        </div>
        <div className="HamburgerHidden">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
