import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Order from "./Order/Order";
import Hamburger from "./HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={`${isOpen ? "BurgerVisible" : "BurgerHidden"}`}>
          new Nav
        </div>
        <div className={`${isOpen ? "BurgerVisible" : "BurgerHidden"}`}>
          new Order
        </div>
        <div className="HamburgerHidden">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
