import React from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Order from "./Order/Order";
import Hamburger from "./HamburgerMenu/HamburgerMenu";

const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <Nav />
      <Order />
      <Hamburger />
    </header>
  );
};

export default Header;
