import React from "react";
import HamburgerMenu from "react-hamburger-menu";

const Hamburger = ({ isOpen, setIsOpen }) => (
  <HamburgerMenu
    isOpen={isOpen}
    menuClicked={() => setIsOpen(!isOpen)}
    width={30}
    height={18}
    strokeWidth={1}
    rotate={0}
    color="black"
    borderRadius={0}
    animationDuration={0.5}
  />
);

export default Hamburger;
