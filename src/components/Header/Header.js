import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Order from "./Order/Order";
import Hamburger from "./HamburgerMenu/HamburgerMenu";
import NavBurgerMenu from "./Nav/NavBurgerMenu/NavBurgerMenu";
import NavBurgerOrder from "./Nav/NavBurgerOrder/NavBurgerOrder";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="Header">
      <div className={`${isOpen ? "BurgerVisible" : "BurgerHidden"}`}>
        <NavBurgerMenu />
        <NavBurgerOrder />
      </div>
      <div className="HeaderContainer">
        <Logo />
        <div className="NavHidden">
          <Nav />
        </div>
        <div className="OrderHidden">
          <Order />
        </div>
        <div className="HamburgerHidden">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
