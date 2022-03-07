import React from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Order from "./Order/Order";
const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <Nav />
      <Order />
    </header>
  );
};

export default Header;
