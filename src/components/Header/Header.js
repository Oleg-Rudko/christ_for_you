import React from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
