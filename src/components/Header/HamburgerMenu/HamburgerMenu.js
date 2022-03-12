import React from "react";
import HamburgerMenu from "react-hamburger-menu";

const Hamburger = ({ isOpen, setIsOpen }) => (
  <HamburgerMenu
    isOpen={isOpen}
    menuClicked={() => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${0}px`;
        document.body.style.width = "100%";
      } else {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("position");
        document.body.style.removeProperty("top");
        document.body.style.removeProperty("width");
      }
    }}
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
